import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from "./context";
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <ProductProvider>
        <Router>
        {/* <Auth0ProviderWithHistory></Auth0ProviderWithHistory>*/}
        <Auth0Provider
       domain="dev-3r-8e07r.us.auth0.com"
       clientId="4eUEg3hFPrNq7wJreMuuGtZcVYVQVwbo"
       redirectUri={window.location.origin}
       audience="https://dev-3r-8e07r.us.auth0.com/api/v2/"
       scope="read:current_user update:current_user_metadata"
  >
        <App /> 
        </Auth0Provider>
        </Router>
    </ProductProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
