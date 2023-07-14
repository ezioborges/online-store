import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
    </div>
  );
}

export default App;
