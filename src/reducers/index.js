import { combineReducers } from 'redux'

import advertsReducer from './advertsReducer'

const rootReducer = combineReducers({
  adverts: advertsReducer,
})

export default rootReducer