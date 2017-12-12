import fetch from 'isomorphic-fetch'
import {
  SET_TUTORS,
  SET_CURRENT_TUTOR,
  ERROR,
  IS_ACTIVE,
  UPDATE_NEW_TUTOR_FORM
} from '../constants'
import { isEmpty } from 'ramda'
const url = process.env.REACT_APP_BASE_URL

export const setTutors = async (dispatch, getState) => {
  const response = await fetch(`${url}/tutors`).then(res => res.json())
  dispatch({ type: SET_TUTORS, payload: response })
}

export const setCurrentTutor = id => async (dispatch, getState) => {
  const response = await fetch(`${url}/tutors/${id}`).then(res => res.json())
  dispatch({
    type: SET_CURRENT_TUTOR,
    payload: response
  })
}

const getOptions = (token, method = 'GET', body = null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + token
    },
    body: body && JSON.stringify(body)
  }
}

export const createTutor = (dispatch, getState) => {
  fetch(url + '/tutors', getOptions(getState(), 'POST', getState().newTutor))
    .then(res => res.json())
    .catch(err => console.log('ERROR', err))
}

export const checkSaveButtonActive = async (dispatch, getState) => {
  console.log('NEW TUTOR', getState().newTutor)
  const currentData = getState().newTutor
  const {
    name,
    gender,
    birthDate,
    email,
    phone,
    shortDesc,
    countryBirth,
    currentCity,
    education,
    institution,
    subjects
  } = currentData

  console.log('isEmpty name', name, isEmpty(name))
  console.log('isEmpty gender', gender, isEmpty(gender))

  if (
    isEmpty(name) ||
    isEmpty(gender) ||
    isEmpty(birthDate) ||
    isEmpty(email) ||
    isEmpty(phone) ||
    isEmpty(shortDesc) ||
    isEmpty(countryBirth) ||
    isEmpty(currentCity) ||
    isEmpty(education) ||
    isEmpty(institution) ||
    isEmpty(subjects)
  ) {
    console.log('about to turn button disabled')
    dispatch({ type: IS_ACTIVE, payload: false })
  } else {
    console.log('about to turn button enabled')
    dispatch({ type: IS_ACTIVE, payload: true })
  }
}

export const updateNewForm = (field, value) => (dispatch, getState) => {
  dispatch({ type: UPDATE_NEW_TUTOR_FORM, payload: { [field]: value } })
}
