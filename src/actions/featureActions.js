export const ADD_MORE = "ADD_MORE"
export const REMOVE_ADD = "REMOVE_ADD"

export const addMore = (feature) => {
    return ({
        type: ADD_MORE,
        payload:feature
    });
}

export const removeAdd = (feature) => {
    return ({
        type: REMOVE_ADD,
        payload:feature
    });
}