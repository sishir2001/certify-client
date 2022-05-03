import {
    FETCH_CERT,
    REQUESTED_REFERRAL,
    REQUESTED_REFERRAL_ERROR,
    VERIFY_CERT,
} from "../actions/types";

const INITIAL_STATE = {
    referral_code: null,
    referral_code_error: null,
};
export const certificateReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CERT:
            return { ...state, fetchCertDetails: action.payload };
        case VERIFY_CERT:
            return { ...state, verifyCertDetails: action.payload };
        case REQUESTED_REFERRAL:
            return {
                ...state,
                referral_code: action.payload,
            };
        case REQUESTED_REFERRAL_ERROR:
            return {
                ...state,
                referral_code_error: action.payload,
            };
        default:
            return state;
    }
};
