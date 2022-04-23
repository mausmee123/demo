import {createStore, combineReducers} from "redux";
import userReducer from "./reducers/reducer"


const combineReducer = combineReducers({
    user: userReducer
});

const store = createStore(
    combineReducer,
    {},
);

export default store;

