// ! all actions creators should be here
import {
    SIGNED_OUT,
    SIGNED_IN,
    SIGNED_UP,
    FETCH_CERT,
    VERIFY_CERT,
    REQUESTED_REFERRAL,
    SIGNED_IN_ERROR,
    SIGNED_UP_ERROR,
    REQUESTED_REFERRAL_ERROR,
    FETCH_EVENTS,
    ADDED_CERT,
    FETCH_EVENTS_ERROR,
    FETCH_CERTS_LIST,
    FETCH_CERTS_LIST_ERROR,
    ADDED_EVENT,
    NULL_CERTS_MESSAGE,
    NULL_EVENTS_MESSAGE,
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

            console.log(response);
            // ! Error message should be displayed .
            if (response.data.status === 400) {
                dispatch({
                    type: SIGNED_IN_ERROR,
                    payload: response.data.message,
                });
            } else {
                console.log("signed in");
                dispatch({
                    type: SIGNED_IN,
                    payload: {
                        username,
                        password,
                    },
                });
                history.push("/generateCertificates");
            }
        } catch (error) {
            console.error(`Error occured while logging in `);
            console.log(error);
            dispatch({
                type: SIGNED_IN_ERROR,
                payload: error.response.data.message,
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

        try {
            console.log("Inside try of signedUp action");
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

            // ! For different reducers !
            let type = SIGNED_UP_ERROR;
            if (response.message === "User Succesfully Created") {
                type = SIGNED_UP;
            }
            dispatch({
                type: type,
                payload: response.message,
            });
            // history.push("/auth/login");
        } catch (error) {
            console.error(`Error occured while signing up `);
            console.log(error);
            dispatch({
                type: SIGNED_UP_ERROR,
                payload: "Server Error while signing up",
            });
        }
    };
};

export const requestedReferral = (formValues) => {
    // @param userId is required to identify the user Logged in and storing it in a central state using redux
    // * action return objects which redux takes of to send to the reducers
    return async (dispatch, getState) => {
        // TODO:call the requestReferral api , store the errors in the redux state, so that when login is rendered it display's error message

        try {
            console.log("Inside try of requestedReferral");
            const response = await cert.get("/requestreferral", {
                params: formValues,
            });

            console.log(response);
            if (response.data.referral_code === null) {
                console.log("inside null");
                dispatch({
                    type: REQUESTED_REFERRAL_ERROR,
                    payload: "Sorry , could not generate referral code",
                });
            } else {
                dispatch({
                    type: REQUESTED_REFERRAL,
                    payload: response.data.referral_code,
                });
            }
        } catch (error) {
            console.error(`Error occured while signing up `);
            console.log(error);
            dispatch({
                type: REQUESTED_REFERRAL_ERROR,
                payload: "Server Error while requesting referral_code",
            });
        }
        // history.push("/auth/referralDisplay");
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

export const fetch_events = ({ username, password }) => {
    // @username:username of the logged in user
    // @password:password of the logged in user
    console.log("Fetching the events");
    return async (dispatch, getState) => {
        try {
            // TODO : fetch the events
            const response = await cert.get("/getevents", {
                headers: {
                    username: username,
                    password: password,
                },
            });

            console.log(`Response of fetching the list of events`);
            console.log(response);

            // TODO : add payload to dispatch
            // dispatching an array
            dispatch({
                type: FETCH_EVENTS,
                payload: response.data,
            });
        } catch (error) {
            console.error("Error occured while fetching the events");
            console.log(error);
            dispatch({
                type: FETCH_EVENTS_ERROR,
                payload: error.response.data.message,
            });
        }
    };
};

export const fetch_certs_list = ({ username, password, event_code }) => {
    console.log(`Fetching the certificates of the event_code : ${event_code}`);
    return async (dispatch, getState) => {
        try {
            // TODO : fetch all the certificates related to an event
            const response = await cert.get("/geteventcertificates", {
                headers: {
                    username,
                    password,
                },
                params: {
                    event_code,
                },
            });

            console.log(`Response of fetching the certificate events : `);
            console.log(response);

            dispatch({
                type: FETCH_CERTS_LIST,
                payload: response.data,
            });
        } catch (error) {
            console.error(`Error occured while fetching certificates list`);
            console.log(error);
            dispatch({
                type: FETCH_CERTS_LIST_ERROR,
                payload: error.response.data.message,
            });
        }
    };
};

export const add_cert = ({
    username,
    password,
    event_code,
    participant_id,
    participant_name,
    position,
    content,
}) => {
    console.log("Adding the certificates");
    return async (dispatch, getState) => {
        try {
            // TODO : fetch the events
            const response = await cert.get("/addcertificate", {
                headers: {
                    username,
                    password,
                },
                params: {
                    event_code,
                    participant_id,
                    participant_name,
                    position,
                    content,
                },
            });

            console.log(`Response of adding the certificates`);
            console.log(response);

            // TODO : add payload to dispatch
            dispatch({
                type: ADDED_CERT,
                payload: response.data.message,
            });
        } catch (error) {
            console.error(
                `Error occured while Error occured while adding certificate `
            );
            console.log(error);
            dispatch({
                type: ADDED_CERT,
                payload: error.response.data.message,
                // payload: "Server Error while requesting referral_code",
            });
        }
    };
};

export const add_event = ({
    username,
    password,
    event_code,
    event_name,
    certificate_default_content,
    template_number,
}) => {
    console.log("Adding the event");
    return async (dispatch, getState) => {
        try {
            // TODO : fetch the events
            const response = await cert.get("/registerevent", {
                headers: {
                    username,
                    password,
                },
                params: {
                    event_code,
                    event_name,
                    certificate_default_content,
                    template_number,
                },
            });

            console.log(`Response of adding the event`);
            console.log(response);

            // TODO : add payload to dispatch
            dispatch({
                type: ADDED_EVENT,
                payload: response.data.message,
            });
        } catch (error) {
            console.error(
                `Error occured while Error occured while adding event `
            );
            console.log(error);
            dispatch({
                type: ADDED_EVENT,
                payload: error.response.data.message,
                // payload: "Server Error while requesting referral_code",
            });
        }
    };
};

export const null_events_message = () => {
    return {
        type: NULL_EVENTS_MESSAGE,
    };
};
export const null_certs_message = () => {
    return {
        type: NULL_CERTS_MESSAGE,
    };
};
