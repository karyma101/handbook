import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home'
import Example from './pages/examples'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/examples">
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