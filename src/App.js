import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route
          exact
          path="/shopping-cart"
          render={ (props) => <ShoppingCart { ...props } /> }
        />
        <Route
          exact
          path="/product-details/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route
          exact
          path="/checkout"
          render={ (props) => <Checkout { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
