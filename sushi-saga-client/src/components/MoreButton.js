import React from 'react'
import {connect} from 'react-redux'
import {onMoreButtonClick} from '../redux/actions'

const MoreButton = ({onMoreButtonClick}) => {
  return (
    <button onClick={onMoreButtonClick}>
      More sushi!
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onMoreButtonClick: () => dispatch(onMoreButtonClick())
  }
}

export default connect(null, mapDispatchToProps)(MoreButton)
