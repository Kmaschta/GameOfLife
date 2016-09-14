import { createStore } from 'redux';

const configureStore = (rootReducer, initialState) => {
    const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

    return createStore(rootReducer, initialState, devTools);
};

export default configureStore;
