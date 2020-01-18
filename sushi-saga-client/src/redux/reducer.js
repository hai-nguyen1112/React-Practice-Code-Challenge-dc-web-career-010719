import {combineReducers} from 'redux'
import * as actionTypes from './actionTypes'

const initialState = {

}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

const appReducers = combineReducers({

})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}

export default rootReducer
