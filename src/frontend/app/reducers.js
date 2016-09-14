import { combineReducers } from 'redux';

import socket from '../socket/reducer';
import game from '../life/reducer';

export default combineReducers({
    socket,
    game,
});
