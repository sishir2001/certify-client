import { combineReducers } from "redux";
import { authReducer } from "./authReducers";
import { certificateReducers } from "./certificateReducers";
import { reducer as formReducer } from "redux-form";

// @ authInfo is an object
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    cert: certificateReducers,
});
