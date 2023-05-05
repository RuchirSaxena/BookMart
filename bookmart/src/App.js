import "./App.css";
import Filter from "./components/Filters/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Romance } from "./components/Filters/Romance";
import { Scifi } from "./components/Filters/Scifi";
import { Mystery } from "./components/Filters/Mystery";
import { Comedy } from "./components/Filters/Comedy";
import { Selfhelp } from "./components/Filters/Selfhelp";
import Home from "./components/Home/Index";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filter />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiction" element={<Scifi />} />
          <Route path="/funny" element={<Comedy />} />
          <Route path="/love" element={<Romance />} />
          <Route path="/mystery" element={<Mystery />} />
          <Route path="/selfhelp" element={<Selfhelp />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
