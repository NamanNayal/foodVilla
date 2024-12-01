import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart= () => {
  // not a great way to writeit its, illogical as any change in dataa will cause our component to re render

  
  //const cartItems = useSelector((store)=> store);

  //useSelector place we tell what it is subscribing to
  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);
  console.log("hi");
  const dispatch  = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());

  };

  
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <FoodItem items={cartItems} />
      </div>
    </div>
  );
};
  

export default Cart;