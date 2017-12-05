import fetch from 'isomorphic-fetch'
import { SET_SUBJECTS } from '../constants'
import { isEmpty, assoc } from 'ramda'
import history from '../history'
const url = process.env.REACT_APP_BASE_URL

export const setSubjects = async (dispatch, getState) => {
  const response = await fetch(`${url}/departments`).then(res => res.json())
  dispatch({ type: SET_SUBJECTS, payload: response })
}
