import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './reducers/quizes/quizSlice';

export const store = configureStore({
  reducer: {
    quizData: quizReducer
  },
});