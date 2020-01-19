import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import Registration from './pages/Registration/Registration'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
