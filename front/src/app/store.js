import { configureStore } from '@reduxjs/toolkit';
import palindromeReducer from '../reducers/palindromeSlice';

export default configureStore({
  reducer: {
    palindromes: palindromeReducer,
  },
});
