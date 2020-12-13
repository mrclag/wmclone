import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Landing } from './components/landing/Landing'
import { Navbar } from './components/layout/Navbar';
import styled from 'styled-components';
import Products from './components/products/Products';
import Dispensaries from './components/dispensaries/Dispensaries';

function App() {
  return (
    <AppStyles>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/dispensaries" component={Dispensaries} />
      </Switch>
    </AppStyles>
  );
}

export default App;


const AppStyles = styled(Router)`
  width: 100vw;
  overflow-x: none;
`