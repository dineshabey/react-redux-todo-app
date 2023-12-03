import * as Actions from "../action/userAction";

const initialState = {
    isLoading: false,
    userList: [],
    isError: false
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.GET_USER_LIST_START:
            return { ...state, isLoading: true };
        case Actions.GET_USER_LIST_SUCCESS:
            return { ...state, userList: [...state.userList, ...action.payload], isLoading: false };
        case Actions.GET_USER_LIST_FAILURE:
            return { ...state, isLoading: false, isError: true };

        default:
            return state;
    }
}