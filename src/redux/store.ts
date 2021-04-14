import { applyMiddleware, createStore } from 'redux';
import counterReducer from './counter_reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
    counterReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

