// ! all actions creators should be here
import { SIGNED_OUT, SIGNED_IN, FETCH_CERT } from "./types";
import history from "../history";

export const signedOut = () => {
    // * action return objects which redux takes of to send to the reducers
    return {
        type: SIGNED_OUT,
    };
};

export const signedIn = (userId, userName) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    return {
        type: SIGNED_IN,
        payload: {
            userId: userId,
            userName: userName,
        },
    };
};

export const fetchCert = (formValues) => {
    // @param formValues is the object with label and input of the forms
    // TODO : use redux-thunk for GET request,which returns a certificate
    console.log("Action for fetch forms");
    // returning a function so that redux-thunk can handle it
    return async (dispatch, getState) => {
        // @param getState : function that returns the current state
        // creating a promise with axios
        // dispatch an object with an arrays of stream details to store it in redux
        dispatch({
            type: FETCH_CERT,
            payload: "Will be there",
        });
        // TODO : programmatic navigation to root route after the server responds
        // TODO : navigate according to the response of the API request
        // * 200
        history.push("/getCertificates/found");
        // ! 404
        // history.push('/getCertificates/notfound');
    };
};
