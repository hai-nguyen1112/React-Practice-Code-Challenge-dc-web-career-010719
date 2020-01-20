import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  sushis: {
    sushis: [],
    isLoadingSushis: false,
    loadSushisError: null
  },
  wallet: {
    money: 100
  },
  table: {
    emptyPlates: []
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// start of SUSHIS REDUCER
const fetchSushisStart = (state, action) => {
  return updateObject(state, {
    isLoadingSushis: action.isLoadingSushis,
    loadSushisError: action.loadSushisError
  })
}

const fetchSushisSuccess = (state, action) => {
  return updateObject(state, {
    isLoadingSushis: action.isLoadingSushis,
    loadSushisError: action.loadSushisError,
    sushis: action.sushis
  })
}

const fetchSushisFail = (state, action) => {
  return updateObject(state, {
    isLoadingSushis: action.isLoadingSushis,
    loadSushisError: action.loadSushisError
  })
}

const onMoreButtonClick = (state, action) => {
  let sushis = JSON.parse(JSON.stringify(state.sushis))
  let fourSushis = sushis.splice(0, 4)
  for (const sushi of fourSushis) {
    sushis.push(sushi)
  }

  return updateObject(state, {
    sushis: sushis
  })
}

const removeSushi = (state, action) => {
  let sushis = JSON.parse(JSON.stringify(state.sushis))
  let clickedSushi = sushis.find(sushi => sushi.id === action.sushi.id)
  let budget = action.budget

  if (clickedSushi['eaten'] === false) {
    if (clickedSushi['price'] <= budget) {
      clickedSushi['eaten'] = true
    } else {
      alert('You need to add more money!')
    }
  }

  return updateObject(state, {
    sushis: sushis
  })
}

const resetSushis = (state, action) => {
  return updateObject(state, {
    sushis: [],
    isLoadingSushis: false,
    loadSushisError: null
  })
}

const sushisReducer = (state = initialState.sushis, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUSHIS_START: return fetchSushisStart(state, action)
    case actionTypes.FETCH_SUSHIS_SUCCESS: return fetchSushisSuccess(state, action)
    case actionTypes.FETCH_SUSHIS_FAIL: return fetchSushisFail(state, action)
    case actionTypes.MORE_BUTTON_WAS_CLICKED: return onMoreButtonClick(state, action)
    case actionTypes.SUSHI_WAS_EATEN: return removeSushi(state, action)
    case actionTypes.GAME_WAS_RESET: return resetSushis(state, action)
    default: return state
  }
}
// end of SUSHIS REDUCER

// start of WALLET REDUCER
const deductWallet = (state, action) => {
  let remainingMoney = state.money

  if (action.sushi['eaten'] === false) {
    if (action.sushi['price'] <= remainingMoney) {
      remainingMoney -= action.sushi['price']
    }
  }

  return updateObject(state, {
    money: remainingMoney
  })
}

const resetWallet = (state, action) => {
  return updateObject(state, {
    money: 100
  })
}

const walletReducer = (state = initialState.wallet, action) => {
  switch (action.type) {
    case actionTypes.SUSHI_WAS_EATEN: return deductWallet(state, action)
    case actionTypes.GAME_WAS_RESET: return resetWallet(state, action)
    default: return state
  }
}
// end of WALLET REDUCER

// start of TABLE REDUCER
const addEmptyPlate = (state, action) => {
  let emptyPlates = JSON.parse(JSON.stringify(state.emptyPlates))

  if (action.sushi['eaten'] === false) {
    if (action.sushi['price'] <= action.budget) {
      emptyPlates.push(action.sushi)
    }
  }

  return updateObject(state, {
    emptyPlates: emptyPlates
  })
}

const resetTable = (state, action) => {
  return updateObject(state, {
    emptyPlates: []
  })
}

const tableReducer = (state = initialState.table, action) => {
  switch (action.type) {
    case actionTypes.SUSHI_WAS_EATEN: return addEmptyPlate(state, action)
    case actionTypes.GAME_WAS_RESET: return resetTable(state, action)
    default: return state
  }
}
// end of TABLE REDUCER

const appReducers = combineReducers({
  sushis: sushisReducer,
  wallet: walletReducer,
  table: tableReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
