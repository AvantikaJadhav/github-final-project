import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();

  // to disable button after adding item
  const [addedItems, setAddedItems] = useState([]);

  // 🌱 Plant Data (7 plants, 3 categories)
  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
    { id: 3, name: "Peace Lily", price: 12, category: "Indoor" },

    { id: 4, name: "Cactus", price: 8, category: "Succulent" },
    { id: 5, name: "Jade Plant", price: 20, category: "Succulent" },

    { id: 6, name: "Bamboo Palm", price: 18, category: "Outdoor" },
    { id: 7, name: "Areca Palm", price: 22, category: "Outdoor" }
  ];

  // 🛒 Add to cart handler
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems((prev) => [...prev, plant.id]);
  };

  return (
    <div>

      {/* NAVBAR (required for marks) */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Paradise Nursery 🌱</h1>

      {/* 🌿 Indoor Plants */}
      <h2>Indoor Plants</h2>
      {plants
        .filter((p) => p.category === "Indoor")
        .map((plant) => (
          <div key={plant.id}>
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedItems.includes(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}

      {/* 🌵 Succulent Plants */}
      <h2>Succulent Plants</h2>
      {plants
        .filter((p) => p.category === "Succulent")
        .map((plant) => (
          <div key={plant.id}>
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedItems.includes(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}

      {/* 🌴 Outdoor Plants */}
      <h2>Outdoor Plants</h2>
      {plants
        .filter((p) => p.category === "Outdoor")
        .map((plant) => (
          <div key={plant.id}>
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedItems.includes(plant.id)}
            >
              {addedItems.includes(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductList;