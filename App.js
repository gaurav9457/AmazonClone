// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SignUp from './Components/Login/SignUp';
import Footer1 from './Components/Footer/Footer1';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import View from './Components/View/View';
import { useContext } from 'react';
import { MyContext } from './Components/AuthProvider';
import AddToCart from './Components/AddToCart/AddToCart';
import NavBar1 from './Components/NavBar/NavBar1';
import AddProduct from './Components/AddProduct/AddProduct';
import ForgotPassword from './Components/Login/ForgotPassword';

function App() {
  const object = useContext(MyContext);
  return (
   <>
    {object.isLoggedIn1 && <NavBar />}
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/addtocart' element={<AddToCart/>}/>
      <Route path='/addProduct' element={<AddProduct/>}/>
      <Route path='/forgotPassword/:email' element={<ForgotPassword/>}/>
    </Routes>
    {object.isLoggedIn1 && <Footer1/> }
    
   </>
  );
}

export default App;
