import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/forms';

export const register = createAsyncThunk(
  'quiz/register',
  async (registrationDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, registrationDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

export const submitQuizAnswers = createAsyncThunk(
  'quiz/submit',
  async ({ formData, answers }, { getState, rejectWithValue }) => {
    try {
      const { userId } = getState().quiz;
      const payload = {
        userId,
        registrationDetails: {
          ...formData,
          registrationDate: new Date().toISOString()
        },
        quizAnswers: Object.entries(answers).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: Array.isArray(value) ? value.join(', ') : String(value)
        }), {})
      };

      const response = await axios.post(`${API_BASE_URL}/submit`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Submission failed');
    }
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    userId: null,
    isLoading: false,
    error: null,
    success: false,
    registrationComplete: false
  },
  reducers: {
    resetQuizState: (state) => {
      state.error = null;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.registrationComplete = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(submitQuizAnswers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitQuizAnswers.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(submitQuizAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { resetQuizState, clearError } = quizSlice.actions;
export default quizSlice.reducer;