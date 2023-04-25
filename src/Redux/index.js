import { combineReducers } from "redux";
import reducer from './Reducer'


const rootteducer=combineReducers({
    todo:reducer
})

export default rootteducer