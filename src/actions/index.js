// ! all actions creators should be here
import { SIGNED_OUT, SIGNED_IN } from "./types";

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
