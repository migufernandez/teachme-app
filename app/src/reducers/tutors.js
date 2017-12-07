import { SET_TUTORS, SET_CURRENT_TUTOR } from '../constants'

export const tutors = (state = [], action) => {
  switch (action.type) {
    case SET_TUTORS:
      return action.payload
    default:
      return state
  }
}

export const currentTutor = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_TUTOR:
      return action.payload
    default:
      return state
  }
}
