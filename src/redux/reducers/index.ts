import { combineReducers } from "redux";
import searchReducer from "./searchParams";
const rootReducers = combineReducers({ searchReducer });
export default rootReducers;
