import {
    ADDED_CERT,
    FETCH_CERT,
    FETCH_CERTS_LIST,
    FETCH_CERTS_LIST_ERROR,
    FETCH_EVENTS,
    FETCH_EVENTS_ERROR,
    REQUESTED_REFERRAL,
    REQUESTED_REFERRAL_ERROR,
    VERIFY_CERT,
    ADDED_EVENT,
    NULL_CERTS_MESSAGE,
    NULL_EVENTS_MESSAGE,
} from "../actions/types";

const INITIAL_STATE = {
    referral_code: null,
    referral_code_error: null,
    fetched_events: null,
    fetched_events_error: null,
    fetched_certs_list: null,
    fetched_certs_list_error: null,
    added_cert_message: null,
    added_event_message: null,
    verifyCertDetails: null,
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
                fetched_events_error: action.payload,
            };
        case FETCH_CERTS_LIST:
            return {
                ...state,
                fetched_certs_list: action.payload,
            };
        case FETCH_CERTS_LIST_ERROR:
            return {
                ...state,
                fetched_certs_list: action.payload,
            };
        case ADDED_CERT:
            return {
                ...state,
                added_cert_message: action.payload,
            };
        case ADDED_EVENT:
            return {
                ...state,
                added_event_message: action.payload,
            };
        case NULL_CERTS_MESSAGE:
            return {
                ...state,
                added_cert_message: null,
            };
        case NULL_EVENTS_MESSAGE:
            return {
                ...state,
                added_event_message: null,
            };
        default:
            return state;
    }
};
