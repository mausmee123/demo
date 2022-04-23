import {SHOW_DATA} from "../constants";

export const showData = (data) => {
    return{
        type: SHOW_DATA,
        payload: data
    }
};