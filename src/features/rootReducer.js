export function rootReducer(state,action){
    if (action.type === "reg"){
        state.id = action.userId;
        return state
    }
    return state
}