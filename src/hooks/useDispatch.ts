import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserActionCreators from '../actionCreators/Product'

export const useTypedDispatch = ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}