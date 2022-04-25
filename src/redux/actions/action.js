import {SHOW_DATA} from "../constants";
import axios from "axios";

// export const showData = (data) => {
//     return{
//         type: SHOW_DATA,
//         payload: data
//     }
// };


// export const showData = () => async dispatch => {
//     try {
//         const res = await axios.get(`http://localhost:3000/users`);
//
//         dispatch({
//             type: SHOW_DATA,
//             payload: res.data
//         });
//     } catch (e) {
//         dispatch({
//             type: USERS_ERROR,
//             payload: console.log(e)
//         });
//     }
// };


export const showData = (data) => async (dispatch) => {

    try {
        const json = await axios.get("http://localhost:3000/users");
        //console.log(json);
        dispatch({
            type: SHOW_DATA,
            data: json.data

        });
    } catch (e) {
        dispatch({
            type: SHOW_DATA,
            data: []

        });
    }
};