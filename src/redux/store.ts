import { applyMiddleware, createStore } from 'redux';
import counterReducer from './counter_reducer';
import thunk from "redux-thunk";

export default createStore(counterReducer, applyMiddleware(thunk));

