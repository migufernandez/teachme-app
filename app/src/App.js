import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './pages/home'
import Company from './pages/company'
import Subjects from './pages/subjects/index2'
import Departments from './pages/departments'
import ShowSubject from './pages/subjects/show'

import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />
          <Route exact path="/subjects/:id" component={ShowSubject} />
          <Route exact path="/subjects" component={Subjects} />
          <Route path="/departments" component={Departments} />
          <Route
            exact
            path="/subjects/department/:department"
            component={Subjects}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
