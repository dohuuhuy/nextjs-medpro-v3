import { countActionTypes } from "./count.action"


const countInitialState = {
    count: 0,
}

export default function reducer(state = countInitialState, action: { type: any }) {
    switch (action.type) {
        case countActionTypes.ADD:
            return Object.assign({}, state, {
                count: state.count + 1,
            })
        default:
            return state
    }
}
