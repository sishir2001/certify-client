// ! all actions creators should be here
import {
    SIGNED_OUT,
    SIGNED_IN,
    SIGNED_UP,
    FETCH_CERT,
    VERIFY_CERT,
} from "./types";
import history from "../history";
import cert from "../apis/cert";
import { formValues } from "redux-form";

export const signedOut = () => {
    // * action return objects which redux takes of to send to the reducers
    return {
        type: SIGNED_OUT,
    };
};

export const signedIn = (formValues) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    // TODO:call the login api , store the errors in the redux state, so that when login is rendered it display's error message
    return async (dispatch, getState) => {
        dispatch({
            type: SIGNED_IN,
            payload: formValues,
        });
        history.push("/generateCertificates");
    };
};

export const signedUp = (formValues) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    return async (dispatch, getState) => {
        // TODO:call the login api , store the errors in the redux state, so that when login is rendered it display's error message
        dispatch({
            type: SIGNED_UP,
        });
        history.push("/auth/login");
    };
};

export const fetchCert = (formValues) => {
    // @param formValues is the object with label and input of the forms
    // TODO : use redux-thunk for GET request,which returns a certificate
    console.log("Action for fetch forms");
    console.log(formValues);
    // returning a function so that redux-thunk can handle it
    return async (dispatch, getState) => {
        // @param getState : function that returns the current state
        // creating a promise with axios
        // dispatch an object with an arrays of stream details to store it in redux

        // ! asynchronous request to api
        const response = await cert.get("/fetchcertificate", {
            params: formValues,
        });
        console.log(response);

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

export const verifyCert = (formValues) => {
    // @param formValues is the object with label and input of the forms
    // TODO : use redux-thunk for GET request,which returns a certificate
    console.log("Action for verify forms");
    console.log(formValues);
    // returning a function so that redux-thunk can handle it
    return async (dispatch, getState) => {
        // @param getState : function that returns the current state
        // creating a promise with axios
        // dispatch an object with an arrays of stream details to store it in redux

        // ! asynchronous request to api
        // const response = await cert.get("/fetchcertificate", {
        //     params: formValues,
        // });
        // console.log(`Await Response : ${response}`);

        dispatch({
            type: VERIFY_CERT,
            payload: "Will be there",
        });

        // TODO : programmatic navigation to root route after the server responds
        history.push("/verifyCertificates/certStatus");
        // history.push('/getCertificates/notfound');
    };
};
