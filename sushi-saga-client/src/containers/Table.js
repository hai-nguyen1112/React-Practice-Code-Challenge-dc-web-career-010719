import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  budgetContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Table = ({emptyPlates, budget}) => {
  const classes = useStyles()

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.budgetContainer}>
        <Typography variant="h4" gutterBottom>
          You have ${budget} remaining!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    emptyPlates: state.table.emptyPlates,
    budget: state.wallet.money
  }
}

export default connect(mapStateToProps)(Table)
