import React from 'react';
import { Switch, Route, } from "react-router-dom"
import { Container, } from "semantic-ui-react"
import Navbar from "./components/Navbar"
import FetchUser from "./components/FetchUser"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./components/Home"
import MyAccounts from "./components/MyAccounts"
import ViewAccount from "./components/ViewAccount"
import NoMatch from "./components/NoMatch"
import Login from "./components/Login"
import Register from "./components/Register"
import { initMiddleware, } from 'devise-axios'

initMiddleware();

const App = () => (
  <> 
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my_accounts" component={MyAccounts} />
          <Route exact path="/accounts/:id" component={ViewAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
