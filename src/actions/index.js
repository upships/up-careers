import axios from 'axios'
import { API_COMPANY_ID, API_CLIENT_ID, API_CLIENT_SECRET } from '../globals'

export const INITIAL_SETUP = 'INITIAL_SETUP'
export const LOAD_JOBS = 'LOAD_JOBS'
export const AUTH_USER = 'AUTH_USER'
export const FETCH_USER = 'FETCH_USER'

export function initialSetup()  {

  const request = axios.get(`/api/company/${API_COMPANY_ID}`)

  return {
    type: INITIAL_SETUP,
    payload: request
  }
}

export function loadJobs(page = 0)  {

  const request = axios.get(`/api/company/${API_COMPANY_ID}/jobs`)

  return {
    type: LOAD_JOBS,
    payload: request
  }
}

export function authUser(values, callback)  {

  const data = {
      grant_type: 'password',
      client_id: API_CLIENT_ID,
      client_secret: API_CLIENT_SECRET,
      username: values.email,
      password: values.password,
      scope: ''
    }

  const request = axios.post('/oauth/token', data)

  request.then( () => callback() )

  return {
    type: AUTH_USER,
    payload: request
  }
}

export function fetchUser() {

  const request = axios.get('/api/user')

  return {
    type: FETCH_USER,
    payload: request
  }
}
