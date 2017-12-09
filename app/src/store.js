import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { subjects, currentSubject, subjectListTitle } from './reducers/subjects'
import { tutors, currentTutor, newTutor, isActive } from './reducers/tutors'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    subjects,
    currentSubject,
    subjectListTitle,
    tutors,
    currentTutor,
    newTutor,
    isActive
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})
export default store
