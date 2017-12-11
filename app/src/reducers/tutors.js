import {
  SET_TUTORS,
  SET_CURRENT_TUTOR,
  UPDATE_NEW_TUTOR_FORM,
  IS_ACTIVE
} from '../constants'
import { merge } from 'ramda'

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

const newTutorDefault = {
  name: '',
  gender: '',
  birthDate: '',
  email: '',
  phone: '',
  shortDesc: '',
  countryBirth: '',
  currentCity: '',
  education: '',
  institution: '',
  subjects: ''
}
export const newTutor = (state = newTutorDefault, action) => {
  switch (action.type) {
    case UPDATE_NEW_TUTOR_FORM:
      console.log('UPDATE_NEW_TUTOR_FORM', action.payload)
      return merge(state, action.payload)
    case SET_TUTORS:
      return newTutorDefault
    default:
      return state
  }
}

export const isActive = (state = false, action) => {
  console.log('isActive REDUCER', state)
  switch (action.type) {
    case IS_ACTIVE:
      console.log('IS_ACTIVE', action.payload)
      return action.payload
    default:
      return state
  }
}

export const name = (state = '', action) => {
  switch (action.type) {
    case 'name':
      return action.payload
    default:
      return state
  }
}

export const gender = (state = '', action) => {
  switch (action.type) {
    case 'gender':
      return action.payload
    default:
      return state
  }
}

export const birthDate = (state = '', action) => {
  switch (action.type) {
    case 'birthDate':
      return action.payload
    default:
      return state
  }
}

export const email = (state = '', action) => {
  switch (action.type) {
    case 'email':
      return action.payload
    default:
      return state
  }
}

export const phone = (state = '', action) => {
  switch (action.type) {
    case 'phone':
      return action.payload
    default:
      return state
  }
}

export const shortDesc = (state = '', action) => {
  switch (action.type) {
    case 'shortDesc':
      return action.payload
    default:
      return state
  }
}

export const countryBirth = (state = '', action) => {
  switch (action.type) {
    case 'countryBirth':
      return action.payload
    default:
      return state
  }
}

export const currentCity = (state = '', action) => {
  switch (action.type) {
    case 'currentCity':
      return action.payload
    default:
      return state
  }
}

export const education = (state = '', action) => {
  switch (action.type) {
    case 'education':
      return action.payload
    default:
      return state
  }
}

export const institution = (state = '', action) => {
  switch (action.type) {
    case 'institution':
      return action.payload
    default:
      return state
  }
}

export const subjects = (state = '', action) => {
  switch (action.type) {
    case 'subjects':
      return action.payload
    default:
      return state
  }
}
