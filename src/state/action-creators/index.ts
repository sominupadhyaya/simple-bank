import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const deposit = (amount:number) => (dispatch:Dispatch<Action>) =>{
        dispatch({
            type : ActionType.DEPOSIT,
            payload : amount
        })
}

export const withdraw = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.WITHDRAW,
    payload: amount,
  })
}

export const bankrupt = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.BANKRUPT,
  })
}
