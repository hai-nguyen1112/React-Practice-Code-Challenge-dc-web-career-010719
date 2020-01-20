import React, {Fragment, useEffect} from 'react'
import MoreButton from '../components/MoreButton'
import {fetchSushis} from '../redux/actions'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import Sushi from '../components/Sushi'
import ResetButton from '../components/ResetButton'

const SushiContainer = ({sushis, fetchSushis}) => {
  useEffect(() => {
    if (isEmpty(sushis)) {
      fetchSushis()
    }
  }, [])

  let fourSushis
  if (!isEmpty(sushis)) {
    fourSushis = sushis.slice(0, 4).map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {fourSushis}
        <MoreButton />
        &nbsp;
        &nbsp;
        &nbsp;
        <ResetButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    sushis: state.sushis.sushis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushis())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SushiContainer)
