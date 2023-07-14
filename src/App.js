import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import * as api from './services/api';
import './App.css';
import Home from './components/Home';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });

  return (
    <div>
      <Route path="/" component={ Home } />
    </div>
  );
}

export default App;
