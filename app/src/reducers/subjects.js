import { SET_SUBJECTS, SET_CURRENT_SUBJECT, SET_TITLE } from '../constants'

export const allSubjects = (state = [], action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return action.payload
    default:
      return state
  }
}

export const subjectListTitle = (state = 'All Subjects', action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.payload
    default:
      return state
  }
}

export const currentSubject = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SUBJECT:
      return action.payload
    default:
      return state
  }
}
