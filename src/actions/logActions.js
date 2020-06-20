import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types';

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

};

//Add new log
export const addLog = (log) => async (dispatch) => { //redux thunk gives us 'dispatch'
    //redux thunk allows us to return an async function in our actions rather than just returning an object with a type and payload
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }

}

//Delete log
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }

};

//Update log
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }

};

//Search logs
export const searchLogs = (text) => async (dispatch) => { //redux thunk gives us 'dispatch'
    //redux thunk allows us to return an async function in our actions rather than just returning an object with a type and payload
    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }

};

//Set current log
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}