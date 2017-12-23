import _ from 'lodash'
import { LOAD_JOBS, LOAD_SELECTED_JOB } from '../actions'

const initialState = { list: {}, loaded: false, loading: true }

export default function loadJobs(state = initialState, action) {

  switch (action.type) {

    case LOAD_SELECTED_JOB:

      return {...state, [action.payload.data.identifier]: action.payload.data }

    case LOAD_JOBS:

      return {list: _.mapKeys(action.payload.data, "identifier"), loaded: true, loading: false }
      //return {list: action.payload.data, loaded: true, loading: false }

    default:

      return state
  }
}
