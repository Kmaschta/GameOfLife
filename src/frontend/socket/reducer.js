import { actionsTypes } from './actions';

const initialState = {
    instance: null,
    loading: false,
    connected: false,
    error: null,
    message: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case actionsTypes.CONNECTING:
        return {
            ...state,
            loading: true,
        };
    case actionsTypes.OPENED:
        return {
            ...state,
            connected: true,
            loading: false,
            instance: payload.instance,
        };
    case actionsTypes.MESSAGED:
        return {
            ...state,
            message: payload.message,
        };
    case actionsTypes.ERROR:
        return {
            ...state,
            loading: false,
            error: payload.error,
        };
    case actionsTypes.CLOSED:
        return {
            ...state,
            loading: false,
            connected: false,
            instance: null,
        };
    default:
        return state;
    }
};

export default reducer;
