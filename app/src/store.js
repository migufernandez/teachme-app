import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import {
  subjects,
  currentSubject,
  subjectListTitle
  // subjectFilter
} from './reducers/subjects'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    subjects,
    currentSubject,
    subjectListTitle
    // subjectFilter
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  //console.log('store.getState()', store.getState())
})
export default store
