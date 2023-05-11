import "./App.css";
import Home from "./components/Home/Index";
import Carousel from "./components/Carousel/Index";
import Header from './components/header/Index';
import AddBook from './components/AddBook/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login"
import SignUp from "./components/Authentication/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/addbook" element={<AddBook/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
