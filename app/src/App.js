import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './pages/home'
import Company from './pages/company'
import Subjects from './pages/subjects/index2'
import Departments from './pages/departments'
import ShowSubject from './pages/subjects/show'
import Tutors from './pages/tutors/index'
import ShowTutor from './pages/tutors/show'
import NewTutor from './pages/tutors/new'

import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company" component={Company} />

          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/subjects/:id" component={ShowSubject} />
          <Route path="/departments" component={Departments} />
          <Route
            exact
            path="/subjects/department/:department"
            component={Subjects}
          />

          <Route exact path="/tutors" component={Tutors} />
          <Route exact path="/tutors/new" component={NewTutor} />
          <Route exact path="/tutors/:id" component={ShowTutor} />
          <Route exact path="/tutors/subjects/:id" component={Tutors} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
