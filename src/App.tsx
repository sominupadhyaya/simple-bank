import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";


const  App = () => {
  const dispatch = useDispatch()
  const {deposit , withdraw , bankrupt} = bindActionCreators(actionCreators  , dispatch)
  const amount = useSelector((state : State) => state.bankReducer)
  return (
    <div className="App">
    <h1>{amount}</h1>
    <button  onClick={() => deposit(1000)}>Deposit</button>
    <button onClick={() => withdraw(500)}>Withdraw</button> 
    <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
