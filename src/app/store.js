import { configureStore } from '@reduxjs/toolkit';
import billsReducer from '../features/bills/billsReducer';

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistentState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistentState");
    if (serialisedState === null) return null;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export const store = configureStore({
  reducer: {
    bills: billsReducer,
  },
  preloadedState: loadFromLocalStorage()?loadFromLocalStorage():{},
});


store.subscribe(() => saveToLocalStorage(store.getState()));