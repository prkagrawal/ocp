import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              ocp
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/" component={HomeScreen} />
        </main>
        <footer className="row center">This is the footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;