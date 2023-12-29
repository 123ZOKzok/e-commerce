import { createSlice } from '@reduxjs/toolkit'


export interface CartState {
  itemCount: number
}

const initialState: CartState = {
  itemCount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     state.itemCount = action.payload;
    },
    removeFromCart: (state, action) => {
        state.itemCount = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer