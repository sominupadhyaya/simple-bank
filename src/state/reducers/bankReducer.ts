const initialState = 0

interface DepositAction  {
    type : "DEPOSIT"
    payload : number
}

interface WithdrawAction {
    type: "WITHDRAW"
    payload : number
}

interface BankruptAction {
    type : "BANKRUPT"
}
type Action  = WithdrawAction | BankruptAction | DepositAction

const bankReducer = (state:number = initialState , action: Action) =>{
    switch (action.type){
        case "DEPOSIT": 
        return state+ action.payload
        case "WITHDRAW" : 
        return state-action.payload
        case "BANKRUPT" :
        return 0
    }
}


export default bankReducer