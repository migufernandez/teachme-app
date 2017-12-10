import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import {
  allSubjects,
  currentSubject,
  subjectListTitle
} from './reducers/subjects'
import {
  tutors,
  currentTutor,
  newTutor,
  isActive,
  name,
  gender,
  birthDate,
  email,
  phone,
  shortDesc,
  imageUrl,
  countryBirth,
  currentCity,
  education,
  institution,
  subjects
} from './reducers/tutors'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    allSubjects,
    currentSubject,
    subjectListTitle,
    tutors,
    currentTutor,
    newTutor,
    isActive,
    name,
    gender,
    birthDate,
    email,
    phone,
    shortDesc,
    imageUrl,
    countryBirth,
    currentCity,
    education,
    institution,
    subjects
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})
export default store
