import { configureStore } from "@reduxjs/toolkit"

import { reducer } from "./slices/sidebar.slice.ts";

export const store = configureStore({
    reducer: {
        sidebar: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch