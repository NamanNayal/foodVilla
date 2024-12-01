import {configureStore} from  "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer:{
    cart: cartReducer,
    },
}) ;

export default store;


















/*
-configureStore() - RTK
store{
     reducer:{
     cart: cartSlice,
     user: userSlice,
}
- <Provider store={store}></Provider> Redux-react

-Slice -RTK
-cartSlice {
name:'cart',
intialState: []
reducers:{
addItem: (state, action) =>{ state = action.payload
}
 export const {addItem, renoveItem} = cartSlice.action;
 export default cartSlice.reducer;  
}

}
*/
