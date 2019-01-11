import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;