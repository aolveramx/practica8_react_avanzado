// Import all actions
import * as actions from '../actions/advertsActions'

export const initialState = {
  adverts: [],
  loading: false,
  hasErrors: false,
}

export default function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ADVERTS:
      return {
        ...state,
        loading: true
      }
    case actions.GET_ADVERTS_SUCCESS:
      return {
        adverts: action.payload,
        loading: false,
        hasErrors: false
      }
    case actions.GET_ADVERTS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    default:
      return state
  }
}