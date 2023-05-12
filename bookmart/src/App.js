import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/header";
import AddBook from "./components/AddBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Productdetails/Product";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/productdetails/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
