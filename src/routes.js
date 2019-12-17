import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import App from './pages/App'
import AddTask from './pages/AddTask'
import Account from './pages/Account'

import Loading from './assets/loading.gif'

import { isAuthenticated } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div>
          <img src={Loading} alt="Loading..." />
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/add-task" component={AddTask} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Routes
