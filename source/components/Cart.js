import { useSelector, useDispatch } from "react-redux";

import { ItemDetails } from "./ItemDetails";
import { clearCart } from "../redux/slice/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="w-6/12 m-auto p-4">
      <button
        className="border-2 bg-gray-200 p-2 "
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {console.log(cartItems.length)}
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cartItems.map((ele) => (
          <ItemDetails key={ele?.data?.id} data={ele.data} />
        ))
      )}
    </div>
  );
};
