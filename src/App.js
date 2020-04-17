import React, { Component } from 'react'
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './component/Cart';
import Home from './component/Home';
import DetailsProduct from './component/DetailsProduct';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
            <Route path='/product/:id/:name' component={DetailsProduct} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;


