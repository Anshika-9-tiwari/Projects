
import React, { useState } from  "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id : 'e1',
    title: 'School fees',
    price: 32423,
    date: new Date(2023, 1,27)
  },
  {
    id : 'e2',
    title: 'Tutions fees',
    price: 33562,
    date: new Date(2023, 4,24)
  },
  {
    id : 'e3',
    title: 'Collage fees',
    price: 32455,
    date: new Date(2023, 4,22)
  }
 ];
  const App = ()=> {
    
   const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        
     const updatedExpense = [expense,...expenses];
      setExpenses(updatedExpense);
    }
  return (
           <div>
         
            <NewExpense onAddExpense={addExpenseHandler} />
           <Expenses item={expenses}/>
          </div>

  
  );
}

export default App;