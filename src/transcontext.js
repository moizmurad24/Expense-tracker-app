import React, {createContext, useState, useReducer} from "react";
import { TransactionReducer } from "./transReducer";


const InitialTransactions = [
    {amount: 200, description: "Dinner"},
    {amount: 100, description: "Food"},
    {amount: -200, description: "Books"},
]

export const Transactioncontext = createContext(InitialTransactions);
export const TransactionProvider = ({children}) => {

    let [state, dispatch] = useReducer(TransactionReducer, InitialTransactions);
  
    function addtransactions(transobj) {
      dispatch({
        type: 'Add_Transaction',
        payload: {
          amount: transobj.amount,
          description: transobj.description
        }
      });
    }
  
    return (
      <Transactioncontext.Provider value={{
        transaction: state,
        addtransactions: addtransactions
      }}>
        {children}
      </Transactioncontext.Provider>
    );
  };
  