import { AUTH_USER, LOGOUT_USER } from '../actions'

import axios from 'axios'

/* Set axios headers */
var StorageUsed = ( localStorage.getItem('saveSessionData') ? localStorage : sessionStorage )
axios.defaults.headers.common['Authorization'] = ( StorageUsed.getItem('accessToken') ? `Bearer ${StorageUsed.getItem('accessToken')}` : null )
axios.defaults.headers.common['Accept'] = 'application/json'

const auth = {

    isLoggedIn: StorageUsed.getItem('isLoggedIn'),
    token: StorageUsed.getItem('accessToken'),
    name: StorageUsed.getItem('userName'),
    email: StorageUsed.getItem('userEmail')
}

export default function(state = auth, action) {

  switch (action.type) {

    case LOGOUT_USER:

      return {
        isLoggedIn: false,
        token: null,
        name: null,
        email: null
      }

    case AUTH_USER:

      return {
        isLoggedIn: true,
        token: action.token,
        name: action.user.name,
        email: action.user.email,
      }

    default:

      return state
  }
}
