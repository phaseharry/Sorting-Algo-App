import swapper from './helpers/swapper'

const bubbleSort = array => {
  let sorted = false
  let bubbled = 0
  while (!sorted) {
    sorted = true
    for (let i = 0; i < array.length - 1 - bubbled; i++) {
      if (array[i] > array[i + 1]) {
        swapper(i, i + 1, array)
        sorted = false
      }
    }
  }
  return array
}

export default bubbleSort