import fetch from 'isomorphic-fetch'
import { SET_TUTORS } from '../constants'
const url = process.env.REACT_APP_BASE_URL

export const setTutors = async (dispatch, getState) => {
  const response = await fetch(`${url}/tutors`).then(res => res.json())
  dispatch({ type: SET_TUTORS, payload: response })
}
