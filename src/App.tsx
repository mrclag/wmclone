import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Landing } from './components/landing/Landing'
import { Navbar } from './components/layout/Navbar';
import styled from 'styled-components';
import Products from './components/products/Products';
import Dispensaries from './components/dispensaries/Dispensaries';
import { StoreContext, createStore } from './stores/DisplayStore';
import {useLocalStore} from 'mobx-react-lite'
import Deliveries from './components/deliveries/Deliveries';
import Deals from './components/deals/Deals';
import Brands from './components/brands/Brands';

function App() {

  const store = useLocalStore(createStore)

  return (
    <StoreContext.Provider value={store}>
      <AppStyles>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/dispensaries" component={Dispensaries} />
          <Route exact path="/deliveries" component={Deliveries} />
          <Route exact path="/maps" component={Dispensaries} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/deals" component={Deals} />
        </Switch>
      </AppStyles>
    </StoreContext.Provider>
  );
}

export default App;


const AppStyles = styled(Router)`
  width: 100vw;
  overflow-x: none;
`