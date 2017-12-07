import { SET_TUTORS } from '../constants'

export const tutors = (state = [], action) => {
  switch (action.type) {
    case SET_TUTORS:
      return action.payload
    default:
      return state
  }
}
