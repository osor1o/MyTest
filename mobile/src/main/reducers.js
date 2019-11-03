import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import navigationReducer from './navigation/reducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: navigationReducer
})

export default rootReducer