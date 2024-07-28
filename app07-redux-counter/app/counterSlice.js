import { creactSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

export const counterSlice = creactSlice({
    name : 'counter',
    initialState,
    reducer : {
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export const counterReducer = counterSlice.reducer
