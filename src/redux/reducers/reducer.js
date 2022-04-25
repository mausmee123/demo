import {SHOW_DATA} from "../constants";

const initialState = {
    data: [],
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_DATA:
            console.log("SHOW_DATA", SHOW_DATA)
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }
}

export default userReducer;