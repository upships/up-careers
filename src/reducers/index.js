import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import InitialSetup from './setup'
import LoadJobs from './jobs'
import Auth from './auth'
import Profile from './profile'
import AppNotifications from './notifications'

const rootReducer = combineReducers({

    app: InitialSetup,
    jobs: LoadJobs,
    auth: Auth,
    form: formReducer,
    profile: Profile,
    notifications: AppNotifications
})

export default rootReducer
