import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        <h1>Paradise Nursery 🌱</h1>
        <Link to="/plants">
          <button>Get Started</button>
        </Link>
      </div>
      <Link to="/cart">
  <button>Go to Cart</button>
</Link>

      <Routes>
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;