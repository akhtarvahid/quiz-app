import { createSlice } from '@reduxjs/toolkit';
import quizData from '../../../quizdata.json';

export const quiz = createSlice({
  name: 'quiz',
  initialState: null,
  reducers: {
    getQuestions: () => {
        return {...quizData}
    }
  }
});

// this is for dispatch
export const { getQuestions } = quiz.actions;

// this is for configureStore
export default quiz.reducer;