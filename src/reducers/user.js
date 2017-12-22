import { FETCH_USER } from '../actions'

const user = {
  hasInfo: localStorage.getItem('userName') ? true : false,
  name: localStorage.getItem('userName'),
  email: localStorage.getItem('userEmail')
}

export default function(state = user, action) {

  switch (action.type) {

    case FETCH_USER:

      localStorage.setItem('userName', action.payload.data.name )
      localStorage.setItem('userEmail', action.payload.data.email )

      return {
        hasInfo: true,
        name: localStorage.getItem('userName'),
        email: localStorage.getItem('userEmail'),
      }

    default:

      return state
  }

}
