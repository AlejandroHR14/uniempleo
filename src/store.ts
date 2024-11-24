import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/slices/user-slice'
import filterReducer from '@/slices/filters-slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch