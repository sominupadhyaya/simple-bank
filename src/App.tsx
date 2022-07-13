import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";



const  App = () => {
  const dispatch = useDispatch()
  const {deposit , withdraw , bankrupt} = bindActionCreators(actionCreators  , dispatch)
  let amount = useSelector((state : State) => state.bankReducer)
  
  const [withdraws, setWithdraws] = useState(0)
  const [deposits , setDeposits] = useState(0)
  return (
    <div className="App">
      <label htmlFor="deposit">Enter the amount you want to deposit : </label>
      <input id="deposit" type="text" onChange={(e) =>{
      if (!isNaN(parseInt(e.target.value))) {
          setDeposits(parseInt(e.target.value))
      }
      }}/>
  
      <br />
      <br />
      
      <label htmlFor="withdraw">Enter the amount you want to withdraw : </label>
      <input type="text" id="withdraw" onChange={(e) => {
      if(!isNaN(parseInt(e.target.value))){
         setWithdraws(parseInt((e.target.value))) 
      }
      }}/>
    <h1>{amount}</h1>
    <button type="submit" onClick={() => deposit(deposits)}>Deposit</button>
    <button type="submit" onClick={() => withdraw(withdraws)}>Withdraw</button> 
    <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
