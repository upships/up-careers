import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import InitialSetup from './setup'
import LoadJobs from './jobs'
import Auth from './auth'

const rootReducer = combineReducers({

    app: InitialSetup,
    jobs: LoadJobs,
    auth: Auth,
    form: formReducer
})

export default rootReducer
