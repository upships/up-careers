import _ from 'lodash'
import { LOAD_PROFILE, LOGOUT_USER, UPDATE_PROFILE } from '../actions'

const childItems = [
                    //'coc.regulations',
                    'coes',
                    'passports',
                    'visas',
                    'seaman_books',
                    'languages',
                    'dp',
                    'ships',
                    'stcw_regulations',
                    'certificates',
                    'works',
                    //'works.ships',
                    'extras',
                    'education'
                  ]

function mapProfileData(data, children) {

  if(data) {

    _.each(children, child => {
        if(data[child]) {
          data[child] = _.mapKeys(data[child], 'id')
        }
    })
  }

  return data
}

export default function(state = {}, action) {

  switch (action.type) {

    case LOGOUT_USER:

      return {}

    case LOAD_PROFILE:

      return mapProfileData(action.payload, childItems)

    default:

      return state
  }

}
