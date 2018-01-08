import _ from 'lodash'
import { ADD_NOTIFICATION, DELETE_NOTIFICATION, CLEAR_NOTIFICATIONS } from '../actions'

export default function(state = {}, action) {

  switch(action.type)  {

    case ADD_NOTIFICATION:

      return {...state, [action.payload.id] : action.payload }

    case DELETE_NOTIFICATION:

      return _.reject(state, { id: action.payload } )

    case CLEAR_NOTIFICATIONS:

      return {}

    default:

      return state
  }
}
