import React from 'react'
import {connect} from 'react-redux'
import {onMoreButtonClick} from '../redux/actions'
import Button from '@material-ui/core/Button'

const MoreButton = ({onMoreButtonClick}) => {
  return (
    <Button variant="contained" color="primary" onClick={onMoreButtonClick}>
      More sushi
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onMoreButtonClick: () => dispatch(onMoreButtonClick())
  }
}

export default connect(null, mapDispatchToProps)(MoreButton)
