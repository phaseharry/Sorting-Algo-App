const swapper = (idx1, idx2, array) => {
  const temp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = temp
}

export default swapper