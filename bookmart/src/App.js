import "./App.css";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Header from './components/header';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login"
import Product from "./components/Productdetails/Product"
import SignUp from "./components/Authentication/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/productdetails/:id" element={<Product />} />
        <Route path="/addbook" element={<AddBook/>}/>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
