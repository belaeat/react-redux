import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// counter kichu object ney. er moddhe 3 ta jinish must deyai lagbe

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // reducer er moddhe amra actions lekhi

    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },

    // payload --> eta tokhoni korbo jokhon amra kono variable counter banabo mane kono fixed amount e barabo ba komabo na
    incrementByValue: (state, actions) => {
      state.count = state.count + actions.payload;
    },
  },
});

// must: need to export those reducer functions

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
