import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/forms/submit';
const fetchUrl = 'http://localhost:3001/api/forms/submissions';
const registerUrl = 'http://localhost:3001/api/forms/register';
export const submitQuizAnswers = createAsyncThunk(
  'quiz/submitAnswers',
  async (answers, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}`, answers);
      return response.data;
      console.log(response.data);
      console.log('Hi')
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  'quiz/register',
  async (data, {rejectWithValue }) => {
    try {
    const response = await axios.post(`${registerUrl}`, data);
    return response.data;
    console.log(response.data);
  } catch (error) {
    return rejectWithValue(error.response.data);
    console.log(error);
  }
}
)
export const fetchQuizAnswers = createAsyncThunk(
  'quiz/fetchAnswers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(fetchUrl);
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
    answerResult: null,
    data: null,
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
      })
      .addCase(fetchQuizAnswers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuizAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.answerResult = action.payload; // Store the fetched answers
      })
      .addCase(fetchQuizAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "An error occurred";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload || 'An error occurred';
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false,
        state.data = action.payload || "An error occured"
      });
  },
});

export default quizSlice.reducer;