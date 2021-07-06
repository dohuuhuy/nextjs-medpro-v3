import { GET_POST } from '../types';
export const fetchPosts = () => async (dispatch: (arg0: { type: string; payload: string[]; }) => any) => {
    return dispatch({
        type: GET_POST,
        payload: ['baif 1', 'bai thu 2', 'nguoi thu 3']
    })
}