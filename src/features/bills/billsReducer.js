import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: []
};

export const billsReducer = createSlice({
    name: 'bills',
    initialState,
    reducers: {
        addItem: (state,action) => {
            state.list = [...state.list, action.payload];
        },
        removeItem: (state,action) => {
            const newState = state.list.filter(item => {return item.id!==action.payload})
            state.list = newState;
        },
        editItem: (state,action) => {
            let searchState = state.list.filter(item => {return item.id===action.payload.id});
            const newState = state.list.filter(item => {return item.id!==action.payload.id});
            searchState = action.payload.data;
            state.list = [...newState,searchState];
        },
    }
})

export const { addItem, removeItem, editItem } = billsReducer.actions;
export const selectBills = (state) => state.bills.list;
export default billsReducer.reducer;
