import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reduxSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  preloadedState: loadFromLocalStorage(), 
});


store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
