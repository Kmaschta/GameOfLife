import { actionsTypes } from './actions';

const initialState = {
    matrix: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case actionsTypes.NEW_STATE:
        return {
            ...state,
            ...payload,
        };
    default:
        return state;
    }
};

export default reducer;
