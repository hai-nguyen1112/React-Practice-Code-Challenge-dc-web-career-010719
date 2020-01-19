import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const Table = ({emptyPlates, budget}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(emptyPlates)
          }
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    emptyPlates: state.sushis.emptyPlates,
    budget: state.sushis.budget
  }
}

export default connect(mapStateToProps)(Table)
