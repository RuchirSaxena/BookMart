import "./App.css";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Header from './components/header';
import AddBook from './components/AddBook';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login"
import SignUp from "./components/Authentication/SignUp";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/addbook" element={<AddBook/>}/>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
