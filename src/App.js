import logo from './logo.svg';
import './App.css';
// import Home from "./components/home/Home"
import Topbar from "./components/topbar/topbar"
import Cities from './components/city/Cities';
import About from './components/aboutUs/About';
import Explore from './components/explore/Explore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route path="/"> */}
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/' element={<Topbar />} />
        {/* <Home /> */}

      </Routes>
    </BrowserRouter >
  );
}

export default App;
