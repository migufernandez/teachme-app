import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './pages/home'
import Company from './pages/company'

import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
