import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const palindromeSlice = createSlice({
  name: 'palindromes',
  initialState: {
    list: [],
  },
  reducers: {
    get: state => {
      return state.list;
    },
    add: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { get, add } = palindromeSlice.actions;

export const process = text => dispatch => {
    Axios.get(`http://localhost:8000/iecho?text=${text}`)
      .then(result => {
        dispatch(add(result.data));
      });
};

export const list = state => state.palindromes.list;

export default palindromeSlice.reducer;
