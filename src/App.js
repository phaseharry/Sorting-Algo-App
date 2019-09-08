import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from './components/layout/NavBar'

import { setArray } from './store/reducers/array'

class App extends Component {
  componentDidMount() {
    this.props.setInitialArray()
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialArray: () => dispatch(setArray(Math.floor(5 + (100 - 5) / 2)))
  }
}

export default connect(null, mapDispatchToProps)(App)
