import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route
        exact
        path="/product-details/:id"
        render={ (props) => <ProductDetails { ...props } /> }
      />
    </div>
  );
}

export default App;
