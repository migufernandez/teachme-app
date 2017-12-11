import fetch from 'isomorphic-fetch'
import { SET_SUBJECTS, SET_CURRENT_SUBJECT } from '../constants'
const url = process.env.REACT_APP_BASE_URL

export const setSubjects = async (dispatch, getState) => {
  const response = await fetch(`${url}/subjects`).then(res => res.json())
  dispatch({ type: SET_SUBJECTS, payload: response })
}

export const setCurrentSubject = id => async (dispatch, getState) => {
  const response = await fetch(`${url}/subjects/${id}`).then(res => res.json())
  dispatch({
    type: SET_CURRENT_SUBJECT,
    payload: response
  })
}
