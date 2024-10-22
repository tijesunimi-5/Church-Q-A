import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/forms';

// Async thunk for submitting both registration details and quiz answers
export const submitForm = createAsyncThunk(
  'quiz/submitForm',
  async ({ formData, answers }, { rejectWithValue }) => {
    try {
      const payload = {
        userId: formData.userId, // Assuming userId is part of formData
        registrationDetails: {
          ...formData,
          registrationDate: new Date().toISOString() // Adding the registration date
        },
        quizAnswers: Object.entries(answers).reduce((acc, [key, value]) => ({
          ...acc,
          [key]: Array.isArray(value) ? value.join(', ') : String(value)
        }), {})
      };

      const response = await axios.post(`${API_BASE_URL}/submit`, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Form submission failed');
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
      .addCase(submitForm.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.success = true;
        state.registrationComplete = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { resetQuizState, clearError } = quizSlice.actions;
export default quizSlice.reducer;
