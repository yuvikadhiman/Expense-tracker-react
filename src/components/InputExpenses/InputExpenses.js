import React from "react";
import './InputExpenses.css';
import InputForm from "./Inputform";

const InputExpenses=(props) => {
    const SaveExpensedatahandler=(enteredexpensedata)=>{
        const expensedata={
            ...enteredexpensedata,
            id: Math.random().toString()
        };
        // console.log(expensedata);
        props.onAddExpense(expensedata);
        
    };


    return (
    <div className="input-expenses">
        
            <InputForm onSaveExpensedata={SaveExpensedatahandler}/>
        
    </div>
    );
};

export default InputExpenses;