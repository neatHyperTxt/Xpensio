import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
function ExpensesList(props) {
    if(props.filteredExpenses.length === 0)
    {
        return <h2 className="expenses-list__fallback">No Expenses Found For This Year</h2>
    }
    return (
        <ul>
            {props.filteredExpenses.map((el,index)=><ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}/>)};
        </ul>
    )
}

export default ExpensesList;
