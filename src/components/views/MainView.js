import React from 'react'
import { connect } from 'react-redux'

const MainView = props => {
  const { array } = props
  return (
    <div>
      {
        array.map((num, idx) => <h5 key={idx}>{num}</h5>)
      }
    </div>
  )
}


const mapStateToProps = ({ array }) => {
  return {
    array
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)