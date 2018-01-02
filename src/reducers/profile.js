import { LOAD_PROFILE, LOGOUT_USER } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {

    case LOGOUT_USER:

      return {}

    case LOAD_PROFILE:

      return action.payload

    default:

      return state
  }

}
