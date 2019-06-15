import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import  MainStateProvider  from './MainStateProvider';
import MainContainer from './components/MainContainer';

const Links = () =>  (
  <nav>
    <Link to="/">Login </Link>
    <Link to="/chat">Chat </Link>
  </nav>
)

function App() {
  return (
    <Router>
      <MainStateProvider>
        <div>
          <Links />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/chat" component={MainContainer} />
            <Route path="*" component={() => '404 NOT FOUND'} />
          </Switch>
        </div>
      </MainStateProvider>
    </Router>
  )
}

export default App;
