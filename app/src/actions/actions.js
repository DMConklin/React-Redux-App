import axios from 'axios';

export const FETCH_TITLE_START = 'FETCH_TITLE_START';
export const FETCH_TITLE_SUCCESS = 'FETCH_TITLE_SUCCESS';
export const FETCH_TITLE_FAIL = ' FETCH_TITLE_FAIL';

export const createSmurf = () => dispatch => {
    dispatch({ type: FETCH_TITLE_START} );
    axios
        .get('https://ghibliapi.herokuapp.com')
        .then(res => {
            dispatch({ type: FETCH_TITLE_SUCCESS, payload: res.data.results })
        })
        .catch(err => dispatch({type: FETCH_TITLE_FAIL, payload: err }));
}