import axios from 'axios'

export const INITIAL_SETUP = 'INITIAL_SETUP'
export const LOAD_JOBS = 'LOAD_JOBS'
export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const FETCH_USER = 'FETCH_USER'
export const LOAD_SELECTED_JOB = 'LOAD_SELECTED_JOB'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const LOAD_PROFILE = 'LOAD_PROFILE'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS'

export const ADD_PROFILE_EDUCATION = 'ADD_PROFILE_EDUCATION'

export function addNotification(message, type = 'is-info')  {

  const id = Math.floor(Math.random() * 10000)
  const notification = { id, message, type }

  return {
    type: ADD_NOTIFICATION,
    payload: notification
  }
}

export function deleteNotification(id) {

  return {
    type: DELETE_NOTIFICATION,
    payload: id
  }
}

export function clearNotifications() {

  return {
    type: CLEAR_NOTIFICATIONS
  }
}

export function initialSetup()  {

  const request = axios.get(`/api/company/${process.env.REACT_APP_API_COMPANY_ID}`)

  return {
    type: INITIAL_SETUP,
    payload: request
  }
}

export function loadJobs(page = 0)  {

  const request = axios.get(`/api/company/${process.env.REACT_APP_API_COMPANY_ID}/jobs`)

  return {
    type: LOAD_JOBS,
    payload: request
  }
}

export function authUser(values)  {

  return (dispatch) => {

    const data = {
        grant_type: 'password',
        client_id: process.env.REACT_APP_API_CLIENT_ID,
        client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
        username: values.email,
        password: values.password,
        scope: '*'
      }

    axios.post('/oauth/token', data).then(

      response => {

          const StorageUsed = values.save_login ? localStorage : sessionStorage
          const auth_token = response.data.auth_token

          if(values.save_login) {
            localStorage.setItem('saveSessionData', true)
          }

          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`

          StorageUsed.setItem('isLoggedIn', true )
          StorageUsed.setItem('accessToken', response.data.access_token )


          axios.get('/api/user').then(

            response => {

              StorageUsed.setItem('userName', response.data.name )
              StorageUsed.setItem('userEmail', response.data.email )

              dispatch({
                type: AUTH_USER,
                token: auth_token,
                user: response.data,
                values: values
              })
            }
          )
      },

      (response) => {

          dispatch(addNotification(response.message, 'is-danger'))
      }
    )
  }
}

export function fetchUser() {

  const request = axios.get('/api/user')

  return {
    type: FETCH_USER,
    payload: request
  }
}

export function logoutUser() {

  localStorage.clear()
  sessionStorage.clear()
  axios.defaults.headers.common['Authorization'] = null

  return {
    type: LOGOUT_USER
  }
}

export function loadJob(job) {

  const request = axios.get(`/api/job/${job}`)

  return {
    type: LOAD_SELECTED_JOB,
    payload: request
  }
}

export function loadProfile() {

  return dispatch => {
    axios.get('/api/profile').then(
      response => dispatch({type: LOAD_PROFILE, payload: response.data}),
      response => {dispatch(addNotification(response.message, 'is-danger'))}
    )
  }
}

export function updateProfile(values, callback, mode = null) {

  return dispatch => {

    const modeQueryParam = mode ? `?mode=${mode}` : ''
    const url = `/api/profile${modeQueryParam}`

    axios.patch(url, values).then(
        response => {
                callback()
                dispatch({type: LOAD_PROFILE, payload: response.data})
              },
        response => {
              callback()
              dispatch(addNotification(response.message, 'is-danger'))
        }
    )
  }
}

export function addProfileItem(values, item, callback = null) {

  return dispatch => {

    const url = `/api/profile/${item}`

    axios.post(url, values).then(

        response => {
                callback?callback():null
                dispatch({ type: LOAD_PROFILE, payload: response.data})
              },
        response => {
              callback?callback():null
              dispatch(addNotification(response.message, 'is-danger'))
        }
    )
  }
}

export function updateProfileCoc(values, callback) {

  return dispatch => {
    const url = '/api/profile/coc'
    axios.patch(url, values).then(
        response => {
                callback()
                dispatch({ type: LOAD_PROFILE, payload: response.data})
              },
        response => {
              callback()
              dispatch(addNotification(response.message, 'is-danger'))
        }
    )
  }
}
