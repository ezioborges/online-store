import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './components/Main';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
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
