import "./App.css";
import Home from "./components/Home/Index";
import Carousel from "./components/Carousel/Index";
import Header from './components/header/Index';
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
