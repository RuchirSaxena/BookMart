import "./App.css";
import Home from "./components/Home/Index";
import Carousel from "./components/Carousel/Index";
import Header from './components/header/Index';
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#fff" }}>
      <Header />

      <div className="main-home">
        <Carousel />
        <Home />
      </div>
    </div>
  );
}

export default App;
