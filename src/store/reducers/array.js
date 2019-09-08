// action types
const SET_ARRAY = 'SET_ARRAY'
const UPDATE_ARRAY = 'UPDATE_ARRAY'

// action creators
export const setArray = size => ({ type: SET_ARRAY, size })
export const updateArray = updatedArr => ({ type: UPDATE_ARRAY, updatedArr })

// reducer
const arrayReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ARRAY:
      const newArr = []
      for (let i = 0; i < action.size; i++) {
        newArr.push(Math.floor(Math.random() * (1, 100) + 1))
      }
      return newArr
    case UPDATE_ARRAY:
      return action.updatedArr
    default:
      return state
  }
}

export default arrayReducer