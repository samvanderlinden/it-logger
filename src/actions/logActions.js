import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// export const getLogs = () => {
//     //redux thunk allows us to return a function in our actions rather than just returning an object with a type and payload
//     //redux allows us to make async calls
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

//Get logs from server
export const getLogs = () => async (dispatch) => { //redux thunk gives us 'dispatch'
    //redux thunk allows us to return an async function in our actions rather than just returning an object with a type and payload
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
        
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}