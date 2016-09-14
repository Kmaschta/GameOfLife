import { createAction } from 'redux-actions';

export const actionsTypes = {
    NEW_STATE: 'GAME_NEW_STATE',
};

export default {
    newState: createAction(actionsTypes.NEW_STATE),
};
