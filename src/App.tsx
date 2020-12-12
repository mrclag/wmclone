import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Landing } from './components/Landing'
import { Navbar } from './components/layout/Navbar';
import styled from 'styled-components';

function App() {
  return (
    <AppStyles>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </AppStyles>
  );
}

export default App;


const AppStyles = styled(Router)`
  width: 100vw;
  overflow-x: none;
`