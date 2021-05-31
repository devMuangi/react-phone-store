import React from 'react';
import {Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isAuthenticated) 
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        {/* <Route exact path="/" component={LoginButton}/> */}
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
   );
   else
   return (
     <React.Fragment>
     <h1>Welcome to phonecommerce</h1>
     <button onClick={() => loginWithRedirect()}>Log In</button>
     </React.Fragment>
   );
}

export default App;
