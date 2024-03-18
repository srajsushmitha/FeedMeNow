import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((e) => e != action.payload);
    },
    clearCart: (state) => {
      console.log('dispatcher called', state)
      console.log('dispatcher called', current.state)
      state.items.length = 0;
    },
  },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer
