import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

export const PING = 'PING';
export const PONG = 'PONG';

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PING });

export const pingEpic = action$ => action$.pipe(
    ofType(PING),
    delay(2000),
    mapTo({ type: PONG }),
);

const pingReducer = (state = { isPinging: false }, action) => {
    switch(action.type) {
        case PING: {
            return { isPinging: true };
        }
        case PONG: {
            return { isPinging: false };
        }
        default:
            return state;
    }
}

export default pingReducer;