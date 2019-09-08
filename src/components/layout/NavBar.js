import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort
} from '../../store/reducers/currentSort'
import { setArray } from '../../store/reducers/array'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <h4>There will be a input drag bar to indicate how many elements are in the initial unsorted array</h4>
          </li>
          <li>
            <h4>Bubble Sort</h4>
          </li>
          <li>
            <h4>Selection Sort</h4>
          </li>
          <li>
            <h4>Insertion Sort</h4>
          </li>
          <li>
            <h4>Quick Sort</h4>
          </li>
          <li>
            <h4>Heap Sort</h4>
          </li>
          <li>
            <h4>Merge Sort</h4>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentSort: state.currentSort,
    isSorting: state.isSorting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectBubbleSort: () => dispatch(bubbleSort()),
    selectSelectionSort: () => dispatch(selectionSort()),
    selectInsertionSort: () => dispatch(insertionSort()),
    selectQuickSort: () => dispatch(quickSort()),
    selectMergeSort: () => dispatch(mergeSort()),
    setArraySize: size => dispatch(setArray(size))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)