import { GET_MENU } from '../types';
const initialState = {
    menu: {},

}

export default function postReducer(state = initialState, { type, payload }: any) {
    switch (type) {

        case GET_MENU:
            return {
                ...state,
                menu: payload,

            }

        default:
            return state
    }
}
