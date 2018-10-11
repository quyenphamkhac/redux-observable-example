import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

//action types
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

//action creator
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserSuccess = payload => ({ type: FETCH_USER_SUCCESS, payload });

//epic
export const userEpic = action$ => action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action => ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
        map(response => fetchUserSuccess(response))
    ))
);

const user = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS: 
            return {
                ...state,
                [action.payload.login]: action.payload,
            };
        default:
            return state;
    }
}

export default user;