import { combineReducers } from "redux";
import { Reducer } from ".";


export const RootState = combineReducers({
    product: Reducer
})