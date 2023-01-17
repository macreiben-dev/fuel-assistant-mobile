import { createSlice } from '@reduxjs/toolkit'

const laptimeSlice = createSlice({
    name: 'laptime',
    initialState: {
        laptimeMinute: 0
    },
    reducers: {
        changeMinute: (state, updatedMinute) => {
            state.laptimeMinute = updatedMinute
        }
    }
})

export const { changeMinute } = laptimeSlice.actions
