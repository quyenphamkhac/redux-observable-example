import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import ping, { pingEpic } from './ping';
import user, { userEpic } from './user';

export const rootEpic = combineEpics(
    pingEpic,
    userEpic,
);

export const rootReducer = combineReducers({
    ping,
    user,
});