// Create Redux action types
export const GET_ADVERTS = 'GET_ADVERTS'
export const GET_ADVERTS_SUCCESS = 'GET_ADVERTS_SUCCESS'
export const GET_ADVERTS_FAILURE = 'GET_ADVERTS_FAILURE'

// Create Redux action creators that return an action
export const getAdverts = () => ({
  type: GET_ADVERTS,
})

export const getAdvertsSuccess = (adverts) => ({
  type: GET_ADVERTS_SUCCESS,
})

export const getAdvertsFailure = () => ({
  type: GET_ADVERTS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchAdverts() {
  return async (dispatch) => {
    dispatch(getAdverts())

    try {
      const res = await fetch('url')
      const data = await res.json()

      dispatch(getAdvertsSuccess(data))
    } catch (error) {
      dispatch(getAdvertsFailure())
    }
  }
}