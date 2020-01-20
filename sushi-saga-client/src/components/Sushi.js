import React from 'react'
import {eatSushi} from '../redux/actions'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'

const Sushi = ({sushi, eatSushi, budget}) => {
  return (
    <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
      <div className="sushi">
        <div className="plate"
          onClick={() => eatSushi(sushi, budget)}>
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
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    budget: state.wallet.money
  }
}

const mapDispatchToProps = dispatch => {
  return {
    eatSushi: (sushi, budget) => dispatch(eatSushi(sushi, budget))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sushi)
