import "./App.css";
import Home from "./components/Home/index";

import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Productdetails from "./components/Product-details/Productdetails";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#fff" }}>
      <Header />

      <div className="main-home">
      

        <BrowserRouter>
          <Routes>
            <Route path="/productdetails/:id" element={<Productdetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

export default App;
