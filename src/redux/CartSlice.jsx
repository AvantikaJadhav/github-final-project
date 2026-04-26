import { createSlice } from "@reduxjs/toolkit";

// initial cart state
const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // 1. ADD TO CART
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // 2. REMOVE ITEM COMPLETELY
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // 3. INCREASE QUANTITY
    increaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    // 4. DECREASE QUANTITY
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

// export actions
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty
} = cartSlice.actions;

// export reducer
export default cartSlice.reducer;