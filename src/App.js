import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import Registration from './pages/Registration/Registration'
import RegistrationMaid from './pages/RegistrationMaid/RegistrationMaid'
import MaidDescription from './pages/MaidDescription/MaidDescription'
import MyBookingHistory from './pages/MyBookingHistory/MyBookingHistory'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/registermaid" component={RegistrationMaid} />
        <Route exact path="/maiddescription" component={MaidDescription} />
        <Route exact path="/bookinghistory" component={MyBookingHistory} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
