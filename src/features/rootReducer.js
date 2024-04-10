export function rootReducer(state,action){
    if (action.type === "reg"){
        state.id = action.id;
        state.email = action.email;
        state.login = action.login;
        state.password = action.password;
        state.refreshToken = action.refreshToken;
        state.accessToken = action.accessToken;
        state.skin = action.skin;
    }
    if (action.type === "logIn"){
        state.id = action.id;
        state.email = action.email;
        state.login = action.login;
        state.password = action.password;
        state.refreshToken = action.refreshToken;
        state.accessToken = action.accessToken;
        state.skin = action.skin;
    }
    if (action.type === "logOut"){
        state.login = '';
        state.password = '';
        state.email = "";
        state.skin =  0;
        state.refreshToken = "";
        state.accessToken = "";
        state.id =  0;
    }
    return state
}