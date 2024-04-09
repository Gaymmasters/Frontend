import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: '',
    password: '',
    skin: 0,
    token: ["",""],
    game_data: {},
    id: 0
}
export const userinfoSlice = createSlice({
    name: 'userinfo',
   initialState,
    reducers: {
        RegistrationUser :(state, action) => {
         state.login = action.payload.login;
         state.password = action.payload.password;
         state.skin = 0;
         state.token = action.payload.token
        }
   },
})

export const userSelector = (state) => state.user;

