import "./App.css";
import Home from "./components/Home/Index";
import Header from "./components/header/Index";
import AddBook from './components/AddBook/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
