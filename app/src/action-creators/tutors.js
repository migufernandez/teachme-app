import fetch from 'isomorphic-fetch'
import { SET_TUTORS, SET_CURRENT_TUTOR } from '../constants'
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
