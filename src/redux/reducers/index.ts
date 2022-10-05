import { combineReducers } from "redux";
import searchReducer from "./searchParams";
import loggedReducer from "./isLogged";
const rootReducers = combineReducers({ searchReducer, loggedReducer });
export default rootReducers;
