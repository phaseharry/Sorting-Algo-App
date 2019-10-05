import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import NavBar from './components/layout/NavBar'
import MainView from './components/views/MainView'
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
        <MainView />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    array: state.array
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialArray: () => dispatch(setArray(Math.floor(5 + (100 - 5) / 2)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
