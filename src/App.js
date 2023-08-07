import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './pages/Main';
import ShoppingCart from './components/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/ProductDetails';
import './App.css';

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
      </Switch>
    </div>
  );
}

export default App;
