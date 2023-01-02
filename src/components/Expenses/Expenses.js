import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpensesChart';
import './Expenses.css';
function Expenses(props) {
    const [filteredYear,setFilteredYear] = useState('2020');
    const filteredExpenses = props.expenses.filter(el=>{
        return el.date.getFullYear().toString()==filteredYear;
    });
    const filterChangeHandler = (selectedYear)=>{setFilteredYear(selectedYear);}
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
}
export default Expenses;