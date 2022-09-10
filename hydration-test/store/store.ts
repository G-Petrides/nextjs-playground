import {configureStore} from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import user from './slices/slice';

export const makeStore = () => configureStore({
    reducer: {
        user: user,
    },
});

export const wrapper = createWrapper(makeStore, { debug: true })