import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  sushis: {
    emptyPlates: [],
    sushis: [],
    isLoadingSushis: false,
    loadSushisError: null,
    budget: 100
  }
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

// start of sushis reducer
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

const eatSushi = (state, action) => {
  let sushis = JSON.parse(JSON.stringify(state.sushis))
  let clickedSushi = sushis.find(sushi => sushi.id === action.sushiID)
  let emptyPlates = JSON.parse(JSON.stringify(state.emptyPlates))
  let budget = state.budget

  if (clickedSushi['eaten'] === false) {
    if (clickedSushi['price'] <= budget) {
      clickedSushi['eaten'] = true
      emptyPlates.push(clickedSushi)
      budget = budget - clickedSushi['price']
    } else {
      alert('You need to add more money!')
    }
  }

  return updateObject(state, {
    sushis: sushis,
    emptyPlates: emptyPlates,
    budget: budget
  })
}

const sushisReducer = (state = initialState.sushis, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUSHIS_START: return fetchSushisStart(state, action)
    case actionTypes.FETCH_SUSHIS_SUCCESS: return fetchSushisSuccess(state, action)
    case actionTypes.FETCH_SUSHIS_FAIL: return fetchSushisFail(state, action)
    case actionTypes.MORE_BUTTON_WAS_CLICKED: return onMoreButtonClick(state, action)
    case actionTypes.SUSHI_WAS_EATEN: return eatSushi(state, action)
    default: return state
  }
}
// end of sushis reducer

const appReducers = combineReducers({
  sushis: sushisReducer
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
