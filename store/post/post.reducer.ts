import { GET_POST } from '../types';
const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null
}

export default function postReducer(state = initialState, { type, payload }: any) {
    switch (type) {

        case GET_POST:
            return {
                ...state,
                posts: payload,
                loading: false,
                error: null
            }

        default:
            return state
    }
}
