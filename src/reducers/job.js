import _ from 'lodash'
import { FETCH_JOB } from '../actions'

const initialState = { item: {}, loaded: false, loading: true }

export default function loadJobs(state = initialState, action) {

  switch (action.type) {
    case FETCH_JOB:

      return {item: action.payload.data, loaded: true, loading: false }

    default:

      return state
  }
}
