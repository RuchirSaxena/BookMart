import "./App.css";
import Home from "./components/Home/Index";
import Header from "./components/header/Index";
import AddBook from "./components/AddBook/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Product from "./components/ProductDetails";
import {ToastContainer} from "react-toastify"
function App() {
  return (<>
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
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
