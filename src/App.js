import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import DescriptionProduct from "./components/DescriptionProduct";
import Cart from "./components/Cart";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={ <Products />} />
      <Route path="/products" element={ <Products />} />
      <Route path="/products/:id" element={ <DescriptionProduct />} />
      <Route path="/cart" element={ <Cart />} />

    </Routes>


    </>
  );
}

export default App;
