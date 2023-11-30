import { legacy_createStore } from "redux";
import { reducer } from "./reducers/todoReducer";


const store = legacy_createStore(reducer);

export default store;