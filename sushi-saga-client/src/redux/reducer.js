import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {
  sushis: {
    sushis: [],
    isLoadingSushis: false,
    loadSushisError: null
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

const sushisReducer = (state = initialState.sushis, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUSHIS_START: return fetchSushisStart(state, action)
    case actionTypes.FETCH_SUSHIS_SUCCESS: return fetchSushisSuccess(state, action)
    case actionTypes.FETCH_SUSHIS_FAIL: return fetchSushisFail(state, action)
    case actionTypes.MORE_BUTTON_WAS_CLICKED: return onMoreButtonClick(state, action)
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
