import React, {useContext, useReducer, useState} from "react";
import './App.css';
import {TransactionProvider, Transactioncontext} from './transcontext';
import {TransactionReducer} from './transReducer';

export const Child = () => {

    const {transaction, addtransactions} = useContext(Transactioncontext);

    const [newdesc, setdesc] = useState("");
    const [amount, setamount] = useState(0);
 

    const handleSubmit = (e) => {
        e.preventDefault();
        addtransactions({
            amount: Number(amount),
            description: newdesc
        });
        setdesc("");
        setamount(0);
        
    }

    const getincome = () => {
        var income = 0
        for (var i = 0; i< transaction.length ; i++){
        if (transaction[i].amount > 0)
            income += transaction[i].amount
    }
        return income
    }

    const getexpense = () => {
        var expense = 0
        for (var i = 0; i< transaction.length ; i++){
            if (transaction[i].amount < 0)
            expense -= transaction[i].amount
        }
        return expense
    }

    return(
    <div className='container'>
    <h2 className='text-center'>Expense Tracker</h2>

    <div >
      <h3>Your Balance <br/> ${getincome() - getexpense()} </h3>
    </div>

    <div className='Income-expense'>
      <h3>INCOME <br/> ${getincome()} </h3>
      <h3>EXPENSE <br/> $-{getexpense()} </h3>
    </div>

    <div >
      <h3>History</h3> 
      <div className='transaction-list'>
        <ul>{transaction.map(
            (transobj ,ind) => {
          return (
            <li key={ind}>
            <span>{transobj.description}</span>
            <span>{transobj.amount}</span>
          </li>
          )
        })}

        </ul>
      </div>
      <hr/> 
    </div>

    <div className='transaction-form'>
      <h3>Add Transactions</h3>

      <form onSubmit={handleSubmit}>
        <label>Add Input</label>
        <br></br>
        <input type="text"
        value={newdesc}
        required 
        onChange={(e) => {
            setdesc(e.target.value);
        }}></input>
        <br></br>
        <label>Add Amount</label>
        <br></br>
        <input type="number"
        value={amount}
        required
        onChange={(e) => {
            setamount(e.target.value);
        }}></input>
        <br></br>
        <input type="submit" value="Add Transactions"></input>
      </form>
    </div>


  </div>
  )
    }
