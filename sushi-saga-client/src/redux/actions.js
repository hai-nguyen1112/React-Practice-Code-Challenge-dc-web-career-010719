import * as actionTypes from './actionTypes'
import axios from '../utils/axiosInstance'

// start of FETCH SUSHIS
export const fetchSushis = () => {
  return dispatch => {
    dispatch(fetchSushisStart())

    axios({
      url: 'sushis',
      method: 'GET'
    })
    .then(response => {
      let sushis = response.data
      sushis.forEach(sushi => sushi['eaten'] = false)
      dispatch(fetchSushisSuccess(sushis))
    })
    .catch(error => dispatch(fetchSushisFail(error)))
  }
}

const fetchSushisStart = () => {
  return {
    type: actionTypes.FETCH_SUSHIS_START,
    isLoadingSushis: true,
    loadSushisError: null
  }
}

const fetchSushisSuccess = sushis => {
  return {
    type: actionTypes.FETCH_SUSHIS_SUCCESS,
    isLoadingSushis: false,
    loadSushisError: null,
    sushis: sushis
  }
}

const fetchSushisFail = error => {
  return {
    type: actionTypes.FETCH_SUSHIS_FAIL,
    isLoadingSushis: false,
    loadSushisError: error
  }
}
// end of FETCH SUSHIS

// start of MORE BUTTON
export const onMoreButtonClick = () => {
  return {
    type: actionTypes.MORE_BUTTON_WAS_CLICKED
  }
}
// end of MORE BUTTON

// start of EAT SUSHI
export const eatSushi = sushiID => {
  return {
    type: actionTypes.SUSHI_WAS_EATEN,
    sushiID: sushiID
  }
}
// end of EAT SUSHI
