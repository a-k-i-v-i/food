import { stat } from "fs"
import { IActionState } from "../../types/ActionTypes"

const initialState: IActionState = {
    product : [],
    order : []
}

export enum EnumTypesAction  {
    PRODUCT = 'PRODUCT',
    ORDER = 'ORDER',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_Q = 'DECREASE_Q',
    DELETE_FROM_ORDER = 'DELETE_FROM_ORDER'
}
interface IProductAction {
    type : EnumTypesAction.PRODUCT,
    payload: any[]
}
interface IOrderAction {
    type : EnumTypesAction.ORDER,
    payload: any[]
}
interface IINCREASEQ {
    type : EnumTypesAction.INCREASE_QUANTITY,
    payload: any | number
}

interface IDecrease {
    type : EnumTypesAction.DECREASE_Q,
    payload: any | number
}

interface IDelete {
    type : EnumTypesAction.DELETE_FROM_ORDER,
    payload: any 
}

export type ActionTypes = IProductAction | IOrderAction | IINCREASEQ | IDecrease | IDelete


export const Reducer = (state = initialState, action: ActionTypes):IActionState=>{
    switch (action.type){
        
case EnumTypesAction.PRODUCT:{
    return{...state, product: [...state.product, action.payload]}
}
case EnumTypesAction.ORDER :{
    return {...state, order: [...state.order, {...action.payload, quantity: 1}]}
}
case EnumTypesAction.INCREASE_QUANTITY:{
    return{...state, order : state.order.map((el)=> el.id === action.payload ? {...el, quantity: el.quantity + 1}: el)}
}
case EnumTypesAction.DECREASE_Q :{
    return{...state, order: state.order.map((el)=> {
        if(el.id === action.payload){
            if(el.quantity > 1){
                return {...el, quantity : el.quantity - 1}
            }else{
                return el
            }
        }else{
            return el
        }
    } )}
}
case EnumTypesAction.DELETE_FROM_ORDER:{
    return{...state, order: state.order.filter((el)=> el.id !== action.payload.id)}
}
        default :return state
    }
}