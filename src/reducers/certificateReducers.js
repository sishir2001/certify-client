import { FETCH_CERT } from "../actions/types";

export const certificateReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CERT:
            return { ...state, fetchCertDetails: action.payload };
        default:
            return state;
    }
};
