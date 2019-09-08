// action types
const BUBBLE_SORT = 'BUBBLE_SORT'
const SELECTION_SORT = 'SELECTION_SORT'
const INSERTION_SORT = 'INSERTION_SORT'
const QUICK_SORT = 'QUICK_SORT'
const MERGE_SORT = 'MERGE_SORT'

// action creators
export const bubbleSort = () => ({ type: BUBBLE_SORT })
export const selectionSort = () => ({ type: SELECTION_SORT })
export const insertionSort = () => ({ type: INSERTION_SORT })
export const quickSort = () => ({ type: QUICK_SORT })
export const mergeSort = () => ({ type: MERGE_SORT })

// reducer
const currentSortReducer = (state = null, action) => {
  switch (action.type) {
    case BUBBLE_SORT:
      return 'bubbleSort'
    case SELECTION_SORT:
      return 'selectionSort'
    case INSERTION_SORT:
      return 'insertionSort'
    case QUICK_SORT:
      return 'quickSort'
    case MERGE_SORT:
      return 'mergeSort'
    default:
      return state
  }
}

export default currentSortReducer