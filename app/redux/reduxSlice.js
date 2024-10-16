import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/forms/submit'
export const submitQuizAnswers = createAsyncThunk(
  'quiz/submitAnswers',
  async (answers, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}`, answers);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    isLoading: false,
    error: null,
    submissionResult: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitQuizAnswers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitQuizAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.submissionResult = action.payload;
      })
      .addCase(submitQuizAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export default quizSlice.reducer;