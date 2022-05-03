// ! Reducers are only for changing value of the state
// ! components should only render data from the state
import {
    SIGNED_OUT,
    SIGNED_IN,
    SIGNED_IN_ERROR,
    SIGNED_UP,
    SIGNED_UP_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: false, // these are the componenets of authState
    // userId: "checkid",
    userName: null,
    password: null,
    errorMessage: null,
    isSignedUpSuccess: null,
    signUpError: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
    // ! update the redux state
    switch (action.type) {
        case SIGNED_IN:
            // no processing here
            return {
                ...state,
                isSignedIn: true,
                password: action.payload.password,
                // userId: action.payload.userId,
                userName: action.payload.username,
                errorMessage: null,
            };

        case SIGNED_OUT:
            // ! modifying a object is easy than an array
            return {
                ...state,
                isSignedIn: false,
                // userId: null,
                userName: null,
                password:null,
                errorMessage: null,
            };

        case SIGNED_IN_ERROR:
            // ! modifying a object is easy than an array
            return {
                ...state,
                isSignedIn: false,
                // userId: null,
                userName: null,
                password: null,
                errorMessage: action.payload,
            };
        case SIGNED_UP:
            // ! modifying a object is easy than an array
            return {
                ...state,
                isSignedUpSuccess: true,
                signUpError: action.payload,
            };
        case SIGNED_UP_ERROR:
            // ! modifying a object is easy than an array
            return {
                ...state,
                isSignedUpSuccess: false,
                signUpError: action.payload,
            };
        default:
            return state;
    }
};
