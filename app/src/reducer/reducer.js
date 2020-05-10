import { FETCH_TITLE_FAIL, FETCH_TITLE_SUCCESS, FETCH_TITLE_START} from '../actions/actions';

const initialState = [
    []
]

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TITLE_START:
            return state;
        case FETCH_TITLE_SUCCESS:
            return state;
        case FETCH_TITLE_FAIL:
            return state;
        default:
            return state;
    }
}