import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // ✅ total cart amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Your Cart 🛒</h1>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>

            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            {/* TOTAL PER ITEM */}
            <p>Total: ${item.price * item.quantity}</p>

            {/* QUANTITY CONTROLS */}
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, type: "increase" }))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, type: "decrease" }))
              }
            >
              -
            </button>

            {/* DELETE BUTTON */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>

          </div>
        ))
      )}

      {/* TOTAL CART AMOUNT */}
      <h2>Total Amount: ${totalAmount}</h2>

      {/* CHECKOUT BUTTON */}
      <button onClick={() => alert("Coming Soon 🚧")}>
        Checkout
      </button>

      {/* CONTINUE SHOPPING */}
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
};

export default CartItem;