import * as actionTypes from '../actions/actionTypes'
import {IAction} from '../types/types'

const initialState ={
    msg:{},
    status:null,
    id:null,
   
}

const errorReducer =(state=initialState,action:IAction)=>{
    switch(action.type){
        case actionTypes.GET_ERRORS:
            return{
                msg:action.payload.msg,
                status:action.payload.status,
                id:action.payload.id,
                
                
            }
        case actionTypes.CLEAR_ERRORS:
            return{
                msg:{},
                status:null,
                id:null
            }
        default:
            return state
    }

}
export default errorReducer