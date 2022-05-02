import { FETCH_CERT, VERIFY_CERT } from "../actions/types";

export const certificateReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CERT:
            return { ...state, fetchCertDetails: action.payload };
        case VERIFY_CERT:
            return { ...state, verifyCertDetails: action.payload };
        default:
            return state;
    }
};
