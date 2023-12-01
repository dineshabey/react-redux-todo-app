import { legacy_createStore } from "redux";
// import { todoReducer } from "./reducers/todoReducer";
import { userReducer} from "./reducers/userReducer";


const store = legacy_createStore(userReducer);

export default store;