import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense(props) {
  const [showForm,setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData)=>
  {
      const expenseData = {...enteredExpenseData,id:Math.random().toString()};
      props.onAddExpense(expenseData);
      setShowForm(false);
  }
  const showFormHandler = ()=>
  {
    setShowForm(true);
  }
  const closeFormHandler = ()=>
  {
    setShowForm(false);
  }
  return (
    <div className="new-expense">
        {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
        {showForm && <ExpenseForm onClickHandler={closeFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}

export default NewExpense
