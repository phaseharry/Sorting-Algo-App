import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import NavBar from './components/layout/NavBar'
import { setArray } from './store/reducers/array'
import './main.css'


class App extends Component {
  componentDidMount() {
    this.props.setInitialArray()
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <div></div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialArray: () => dispatch(setArray(Math.floor(5 + (100 - 5) / 2)))
  }
}

export default connect(null, mapDispatchToProps)(App)
