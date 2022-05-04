import {
    ADDED_CERT,
    FETCH_CERT,
    FETCH_EVENTS,
    FETCH_EVENTS_ERROR,
    REQUESTED_REFERRAL,
    REQUESTED_REFERRAL_ERROR,
    VERIFY_CERT,
} from "../actions/types";

const INITIAL_STATE = {
    referral_code: null,
    referral_code_error: null,
    fetched_events: null,
    fetched_events_error: null,
    fetched_certs: null,
    added_cert_message: null,
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
        case FETCH_EVENTS:
            return {
                ...state,
                fetched_events: action.payload,
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                // fetched_events: [],
                fetched_events_error:action.payload
            };
        case ADDED_CERT:
            return {
                ...state,
                added_cert_message: action.payload,
            };
        default:
            return state;
    }
};
