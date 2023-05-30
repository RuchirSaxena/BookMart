import "./App.css";
import Home from "./components/Home";
import Header from "./components/header";
import AddBook from "./components/AddBook";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import ProductDetails from "./components/ProductDetails";
import { ToastContainer } from "react-toastify";
import Constants from "./components/Utilities/Constants";
import GoToTopButton from "./components/GoToTopButton";
import Cart from './components/Cart';
import Help from "./components/Help";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={Constants.autoCloseTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GoToTopButton />
    </>
  );
}

export default App;