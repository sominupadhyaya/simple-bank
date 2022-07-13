import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { State } from "./state/reducers";

const  App = () => {
  const dispatch = useDispatch()
  const {deposit , withdraw , bankrupt} = bindActionCreators(actionCreators  , dispatch)
  const amount = useSelector(state : State => state.bankReducer)
  return (
    <div className="App">
    <h1>{amount}</h1>
    <button>Deposit</button>
    <button>Bankrupt</button>
    <button>Withdraw</button> 
    </div>
  );
}

export default App;
