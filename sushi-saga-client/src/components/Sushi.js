import React from 'react'
import {eatSushi} from '../redux/actions'
import {connect} from 'react-redux'

const Sushi = ({sushi, eatSushi}) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={() => eatSushi(sushi.id)}>
        {
          sushi.eaten
          ?
          null
          :
          <img src={sushi.img_url} width="100%" alt={sushi.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    eatSushi: sushiID => dispatch(eatSushi(sushiID))
  }
}

export default connect(null, mapDispatchToProps)(Sushi)
