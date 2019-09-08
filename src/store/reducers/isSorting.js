// types
const SORTING = 'SORTING'
const DONE_SORTING = 'DONE_SORTING'

// action creators
export const initSort = () => ({ type: 'SORTING' })
export const finishSort = () => ({ type: 'DONE_SORTING' })

// reducer
const isSortingReducer = (state = false, action) => {
  switch (action.type) {
    case SORTING:
      return true
    case DONE_SORTING:
      return false
    default:
      return state
  }
}

export default isSortingReducer