import React, {Fragment, useEffect} from 'react'
import {fetchSushis} from '../redux/actions'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import Sushi from '../components/Sushi'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  paperContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))

const SushiContainer = ({sushis, fetchSushis}) => {
  const classes = useStyles()

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
      <Paper className={classes.paperContainer}>
        <Grid container spacing={3}>
          {fourSushis}
        </Grid>
      </Paper>
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
