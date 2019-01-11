import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';

var rootReducer = combineReducers({
	spinnerData : spinnerReducer,
	bugsData : bugsReducer
});

export default rootReducer;