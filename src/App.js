// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/Shop-context';
import { CheckOut } from './pages/shop/CheckOut';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
          
            <Route path='/' element={<Shop />} >
            {/* <Shop/> */}
            </Route>

            <Route path='/cart' element={<Cart />}>
            </Route>

            <Route path='/Login'>
            </Route>

            <Route path='/checkOut' element={<CheckOut/>}>
            </Route>

          </Routes>
        </Router>
        <br></br>
        <Footer/>
      </ShopContextProvider>
    </div>
  );
}

export default App;
