import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Plant 1", price: 200 },
    { id: 2, name: "Plant 2", price: 300 },
    { id: 3, name: "Plant 3", price: 150 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;