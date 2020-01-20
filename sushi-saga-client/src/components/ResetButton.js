import React from 'react'
import {resetGame, fetchSushis} from '../redux/actions'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'

const ResetButton = ({resetGame, fetchSushis}) => {

  const onResetGame = () => {
    resetGame()
    fetchSushis()
  }

  return (
    <Button variant="contained" color="primary" onClick={onResetGame}>
      Reset Game
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame()),
    fetchSushis: () => dispatch(fetchSushis())
  }
}

export default connect(null, mapDispatchToProps)(ResetButton)
