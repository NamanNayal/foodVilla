import { createSlice, current } from "@reduxjs/toolkit"


//my slice reads my name and then initial state and then reducer that have mapping of action and my reducer function 

// the state in reducer function represents the initial state or the current state and the action represents the  data which is coming in
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
        state.items.pop();
      },
      clearCart: (state, action) => {
        return { items: [] };
      },
    },
  });
  
  export const { addItem, removeItem, clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;