
import {  EnumTypesAction } from "../store/reducer"

export const addToProduct = (value:any)=>{
     return {type: EnumTypesAction.PRODUCT, payload: value}
}

export const addToOrder = (el:any)=>{
     return{type: EnumTypesAction.ORDER, payload: el}
}

export const increaseQ = (id:any)=>{
     return{type: EnumTypesAction.INCREASE_QUANTITY, payload: id}
}

export const decreaseQ = (id:any) => {
     return {type: EnumTypesAction.DECREASE_Q, payload: id}
}

export const deleteFromOrder = (id:any)=>{
     return {type : EnumTypesAction.DELETE_FROM_ORDER, payload : id}
}