import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";
import { anotherReducer } from "./anotherReducer";


const rootReducer = combineReducers(
    {
        todoReducer,
        userReducer,
        anotherReducer
    }
);

export default rootReducer;