import React, {useContext, useReducer} from "react";
import logo from './logo.svg';
import './App.css';
import { Child } from "./Child";
import { TransactionProvider } from "./transcontext";


function App() {
  return (
  <div>
  <TransactionProvider>
  <Child/>
  </TransactionProvider>
 
    </div>
  )
}

export default App;
