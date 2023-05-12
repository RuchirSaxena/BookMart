import "./App.css";
import Home from "./components/Home/Index";
import Header from "./components/header/Index";
import AddBook from "./components/AddBook/Index";
import Footer from "./components/footer/Index";
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
