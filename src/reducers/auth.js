import axios from 'axios'
import { AUTH_USER } from '../actions'

const auth = {

    isLoggedIn: localStorage.getItem('accessToken') ? true : false,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    expiresIn: localStorage.getItem('expiresIn'),
}

/* Set axios headers */

axios.defaults.headers.common['Authorization'] = ( localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : null )
axios.defaults.headers.common['Accept'] = 'application/json'

export default function(state = auth, action) {

  switch (action.type) {
    case AUTH_USER:

      localStorage.setItem('accessToken', action.payload.data.access_token )
      localStorage.setItem('refreshToken', action.payload.data.refresh_token )
      localStorage.setItem('expiresIn', action.payload.data.expires_in )

      axios.defaults.headers.common['Authorization'] = ( localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : null )

      return {
        isLoggedIn: true,
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        expiresIn: localStorage.getItem('expiresIn'),
      }

    default:

      return state
  }
}
