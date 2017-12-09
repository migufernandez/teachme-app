import fetch from 'isomorphic-fetch'
import { SET_TUTORS, SET_CURRENT_TUTOR, ERROR, IS_ACTIVE } from '../constants'
import history from '../history'
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

export const createTutor = (data, history) => async (dispatch, getState) => {
  if (!window.localStorage.getItem('access_token')) {
    return dispatch({ type: ERROR, payload: 'Could not add tutor' })
  }
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
  }
  const method = 'POST'
  const body = JSON.stringify(data)

  const result = await fetch(`${url}/tutors`, {
    headers,
    method,
    body
  }).then(res => res.json())

  if (!result.ok) {
    dispatch(setTutors)
    history.push('/tutors')
  } else {
  }
}
export const isActive = async (dispatch, getState) => {
  const currentData = !isEmpty(getState().tutor.name)
    ? getState().tutor
    : getState().editTutor
  const {
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
  } = currentData
  if (
    isEmpty(name) ||
    isEmpty(gender) ||
    isEmpty(birthDate) ||
    isEmpty(email) ||
    isEmpty(phone) ||
    isEmpty(shortDesc) ||
    isEmpty(imageUrl) ||
    isEmpty(countryBirth) ||
    isEmpty(currentCity) ||
    isEmpty(education) ||
    isEmpty(institution) ||
    isEmpty(subjects)
  ) {
    dispatch({ type: IS_ACTIVE, payload: true })
  } else {
    dispatch({ type: IS_ACTIVE, payload: false })
  }
}
