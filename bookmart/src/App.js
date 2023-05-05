import './App.css';
import Filter from './components/Filters/Filter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Romance } from './components/Filters/Romance';
import { Scifi } from './components/Filters/Scifi';
import { Mystery } from './components/Filters/Mystery';
import { Comedy } from './components/Filters/Comedy';
import { Selfhelp } from './components/Filters/Selfhelp';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      
      
      <Filter />
       
        <Routes>
          <Route path="/fiction" element={<Scifi/>} />
          <Route path="/funny" element={<Comedy />} />
          <Route path="/love" element={<Romance />} />
          <Route path="/mystery" element={<Mystery />} />
          <Route path="/selfhelp" element={<Selfhelp />} /></Routes>
          

         
        
          
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
