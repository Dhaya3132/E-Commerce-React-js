import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcom from './Components/Navbarcom';
import logo from './12133-removebg-preview 1.png';
import Products from './Components/Products';
import Details from './Components/Details';
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
      <p className="Shop">Shop Now</p>
     </div>

    <Products />
    
    <div className="details-card">
      <Details />
    </div>
    
    </div>

  );
}

export default App;
