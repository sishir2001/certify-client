// ! all actions creators should be here
import {
    SIGNED_OUT,
    SIGNED_IN,
    SIGNED_UP,
    FETCH_CERT,
    VERIFY_CERT,
    REQUESTED_REFERRAL,
    SIGNED_IN_ERROR,
} from "./types";
import history from "../history";
import cert from "../apis/cert";

export const signedOut = () => {
    // * action return objects which redux takes of to send to the reducers
    return {
        type: SIGNED_OUT,
    };
};

export const signedIn = ({ username, password }) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    // TODO:call the login api , store the errors in the redux state, so that when login is rendered it display's error message
    return async (dispatch, getState) => {
        // TODO : check with the auth server if the credentials are right / if not update the state login error
        try {
            console.log(`Inside try catch login`);
            const response = await cert.get("/verifyuser", {
                headers: {
                    username,
                    password,
                },
            });

            // ! Error message should be displayed .
            if (response.message === "User Data Not Found!!!!") {
                dispatch({
                    type: SIGNED_IN_ERROR,
                    payload: response.message,
                });
            } else {
                dispatch({
                    type: SIGNED_IN,
                    payload: {
                        username,
                    },
                });
            }
            history.push("/generateCertificates");
        } catch (error) {
            console.error(`Error occured while logging in `);
            console.log(error);
            dispatch({
                type: SIGNED_IN_ERROR,
                payload: "Server Error occurred while logging in",
            });
            // history.push("/auth/login");
        }
    };
};

export const signedUp = ({ name, username, password, referral_code }) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    return async (dispatch, getState) => {
        // TODO:call the sign Up api , store the errors in the redux state, so that when login is rendered it display's error message

        const response = await cert.get("/usersignup", {
            headers: {
                username,
                password,
            },
            params: {
                name,
                referral_code,
            },
        });

        console.log(`signedUp response ${response}`);
        dispatch({
            type: SIGNED_UP,
        });
        history.push("/auth/login");
    };
};

export const requestedReferral = (formValues) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    return async (dispatch, getState) => {
        // TODO:call the requestReferral api , store the errors in the redux state, so that when login is rendered it display's error message

        const response = await cert.get("/requestreferral", {
            params: formValues,
        });

        console.log(`request referral response ${response}`);

        // ? use the payload to convey the referral_code
        dispatch({
            type: REQUESTED_REFERRAL,
        });
        // TODO : redirect to a new page / Display a toast with a message .
        history.push("/auth/referralDisplay");
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
        const response = await cert.get("/fetchcertificate", {
            params: formValues,
        });
        console.log(`verifyCert Response : ${response}`);

        dispatch({
            type: VERIFY_CERT,
            payload: "Will be there",
        });

        // TODO : programmatic navigation to root route after the server responds
        history.push("/verifyCertificates/certStatus");
        // history.push('/getCertificates/notfound');
    };
};
