import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Landing } from './components/landing/Landing'
import { Navbar } from './components/layout/Navbar';
import styled from 'styled-components';
import Products from './components/products/Products';
import Dispensaries from './components/dispensaries/Dispensaries';
import { StoreContext, createStore } from './stores/DisplayStore';
import {useLocalStore} from 'mobx-react-lite'

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