import React from 'react'
import {resetGame, fetchSushis} from '../redux/actions'
import {connect} from 'react-redux'

const ResetButton = ({resetGame, fetchSushis}) => {

  const onResetGame = () => {
    resetGame()
    fetchSushis()
  }

  return (
    <button onClick={onResetGame}>
      Reset Game
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame()),
    fetchSushis: () => dispatch(fetchSushis())
  }
}

export default connect(null, mapDispatchToProps)(ResetButton)
