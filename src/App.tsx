import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Landing } from './components/landing/Landing'
import { Navbar } from './components/layout/Navbar';
import styled from 'styled-components';
import { CovidMessage } from './components/landing/CovidMessage';
import Products from './components/products/Products';

function App() {
  return (
    <AppStyles>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </AppStyles>
  );
}

export default App;


const AppStyles = styled(Router)`
  width: 100vw;
  overflow-x: none;
`