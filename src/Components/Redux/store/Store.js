
import loginReducer from '../../ecommerce/Reducer/loginReducer';
import logger from 'redux-logger';
import {legacy_createStore as createStore,applyMiddleware} from 'redux'

let myReduxStore =createStore(loginReducer,applyMiddleware(logger));

export default myReduxStore;