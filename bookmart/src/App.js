import "./App.css";
import Home from "./components/Home";
import Header from "./components/header";
import AddBook from "./components/AddBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Product from "./components/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productdetails/:id" element={<Product />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
