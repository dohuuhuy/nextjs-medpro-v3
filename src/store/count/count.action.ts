export const countActionTypes = {
    ADD: 'ADD',
}

export const addCount = () => async (dispatch: (arg0: { type: string }) => any) => {
    return dispatch({ type: countActionTypes.ADD })
}
