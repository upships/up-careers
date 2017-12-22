import _ from 'lodash'
import { LOAD_JOBS } from '../actions'

const initialState = { list: {}, loaded: false, loading: true }

export default function loadJobs(state = initialState, action) {

  switch (action.type) {
    case LOAD_JOBS:

      return {list: _.mapKeys(action.payload.data, "identifier"), loaded: true, loading: false }
      //return {list: action.payload.data, loaded: true, loading: false }

    default:

      return state
  }
}
