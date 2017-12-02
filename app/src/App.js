import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './pages/home'

import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
