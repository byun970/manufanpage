import { configureStore, createSlice } from "@reduxjs/toolkit";

/* let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});

export let { changeName } = user.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
  reducers: {},
}); */

let hilight = createSlice({
  name:"hilight",
  initialState:[],
  reducers: {
    setHilight(state) {
      
    }
  },
})

export let { setHilight } = hilight.actions;

export default configureStore({
  reducer: {
    hilight: hilight.reducer
  },
});
