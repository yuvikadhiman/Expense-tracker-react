import React, { useState } from 'react';

import './InputForm.css';
const InputForm=(props)=>{

    // const[userinput,setuserinput]=useState({
    //     settitle:'', 
    //     setamount:'',
    //     datehandler:''
    // });
    const[entertitle,setenteredtitle]=useState('');
    const titlechangehandler= (event)=>{

        setenteredtitle(event.target.value);
        // // setuserinput({
        // //     ...userinput,
        // //     settitle:event.target.value
        // // })
        // setuserinput((prevstate)=>{
        //     return{...prevstate,settitle:event.target.value}
        // });

    };

    const[enteramount,setamount]=useState('');
    const amounthandler=(event)=>{

        setamount(event.target.value);
        // setuserinput({
        //     ...userinput,
        //     setamount:event.target.value
        // })
           
    };

    const[enterdate,setdate]=useState('');
    const datehandler=(event)=>{
        setdate(event.target.value);
        // setuserinput({
        //     ...userinput,
        //     datehandler:event.target.value
        // })
           
    };

    const submithandler=(event)=>
    {
        event.preventDefault();

        const expensedata ={
            title: entertitle,
            amount: enteramount,
            date: new Date(enterdate) 
        };
        props.onSaveExpensedata(expensedata);

        setenteredtitle('');
        setamount('');
        setdate('');
    };

return (
    <form onSubmit={submithandler}>
        <div className='input-expenses__controls'>
            <div className='input-expenses__control'>
                <label>Title</label>
                <input type='text' 
                value={entertitle} 
                onChange={titlechangehandler}/>
            </div>
            <div className='input-expenses__control'>
                <label>Amount</label>
                <input type='number' 
                value={enteramount} 
                onChange={amounthandler}/>
             </div>
             <div className='input-expenses__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31'
                value={enterdate} 
                onChange={datehandler}/>
             </div>
        </div>
        <div className='input-expenses__actions'>
            <button type='submit'>Add Expenses</button>

        </div>
    </form>
    );
};

export default InputForm; 