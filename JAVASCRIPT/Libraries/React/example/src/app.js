import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Navbar'
import Home from './pages/home'
import Example from './pages/examples'

const App = () => {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route path="/example">
          <Example />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App