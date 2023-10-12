import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcom from './Components/Navbarcom';
import logo from './12133-removebg-preview 1.png';
import Products from './Components/Products';
import Details from './Components/Details';
import {
  Routes,
  Route
} from "react-router-dom";

import Shop from './Components/Shop';


function App() {

  return (

<div className="App">
      <Navbarcom />
          <div className="box1">
            <div className="box">
               <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>

  <div className="content">
    <p className="text1">Furniture for a Better EveryDay Life</p>
  </div>
     

  <div className="button">
    <p className="Shop" >Shop Now</p>
  </div>

  <Products />  

  <Details />


  <Routes>
        <Route path="/Shop/" element={<Shop />} />
  </Routes>

  </div>
  

 
  );
}

export default App;
