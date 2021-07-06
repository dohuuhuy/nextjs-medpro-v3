import { api, GET_MENU } from './../types';

export const fetchMenu = () => async (dispatch: (arg0: { type: string; payload: string[]; }) => any) => {
    const res = await fetch(api + 'navigation')
    const data = await res.json()
    return dispatch({
        type: GET_MENU,
        payload: data
    })
}