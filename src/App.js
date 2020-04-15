import React from 'react';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './component/Cart';
import Product from './component/Product';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Product} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
