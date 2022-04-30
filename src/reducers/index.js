import { combineReducers } from "redux";
import { authReducer } from "./authReducers";

// @ authInfo is an object
export default combineReducers({
    auth: authReducer,
});
