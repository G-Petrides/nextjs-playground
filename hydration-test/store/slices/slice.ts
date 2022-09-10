import {createSlice, current} from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";

export interface UserState {
    email: string;
    name: string;
}

const initialState = {
    name: 'Geoff',
    email: 'geoff@quaysports.com',
} as UserState

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log(current(state))
            console.log(action)
            return {...state, ...action.payload.user}
        }
    },
    reducers: {
        setName: (state, action) => {state.name = action.payload},
        setEmail: (state, action) => {state.email = action.payload}
    },
});

export const getUserState = (state) => state.user;

export const { setName, setEmail } = userSlice.actions;

export default userSlice.reducer;