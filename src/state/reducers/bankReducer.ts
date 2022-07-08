const initialState = 0

type Action =  {
    type : string,
    payload : number
}

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