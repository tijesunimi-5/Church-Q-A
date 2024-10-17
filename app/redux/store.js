import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reduxSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});