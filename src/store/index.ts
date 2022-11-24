import { combineReducers } from 'redux';
import { themeReducer, usersReducer } from './reducers';

const allReducers = combineReducers({
	users: usersReducer,
	theme: themeReducer
});

export default allReducers;

export type State = ReturnType<typeof allReducers>
