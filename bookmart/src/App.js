
import "./App.css";
import Home from "./components/Home/Index";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        
     
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
