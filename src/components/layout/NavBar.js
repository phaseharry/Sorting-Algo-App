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
  handleChange = event => {
    this.props.setArraySize(event.target.value)
  }

  pickSort = sort => {
    const { selectBubbleSort, selectSelectionSort, selectInsertionSort, selectQuickSort, selectMergeSort } = this.props
    switch (sort) {
      case 'bubbleSort':
        return selectBubbleSort()
      case 'selectionSort':
        return selectSelectionSort()
      case 'insertionSort':
        return selectInsertionSort()
      case 'quickSort':
        return selectQuickSort()
      case 'mergeSort':
        return selectMergeSort()
      default:
        console.error('Unknown sort')
    }
  }

  currentSort = sort => {
    if (sort === this.props.currentSort) {
      return {
        textDecoration: 'underline'
      }
    }
  }

  render() {
    const { handleChange, pickSort, currentSort } = this
    return (
      <nav>
        <ul>
          <li>
            <input type="range" onChange={handleChange} name="numElements" min="5" max="100"></input>
            <label>Set Array Size</label>
          </li>
          <li onClick={() => pickSort('bubbleSort')}>
            <h4 style={currentSort('bubbleSort')}>Bubble Sort</h4>
          </li>
          <li onClick={() => pickSort('selectionSort')}>
            <h4 style={currentSort('selectionSort')}> Selection Sort</h4>
          </li>
          <li onClick={() => pickSort('insertionSort')}>
            <h4 style={currentSort('insertionSort')}> Insertion Sort</h4>
          </li>
          <li onClick={() => pickSort('quickSort')}>
            <h4 style={currentSort('quickSort')}> Quick Sort</h4>
          </li>
          <li onClick={() => pickSort('mergeSort')}>
            <h4 style={currentSort('mergeSort')}> Merge Sort</h4>
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