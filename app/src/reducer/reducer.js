import { FETCH_FILM_FAIL, FETCH_FILM_SUCCESS, FETCH_FILM_START} from '../actions/actions';

const initialState = {
    films: [],
    error: '',
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FILM_START:
            console.log(FETCH_FILM_START);
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_FILM_SUCCESS:
            console.log(FETCH_FILM_SUCCESS);
            return {
                films: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FILM_FAIL:
            console.log(FETCH_FILM_FAIL);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}