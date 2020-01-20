import React, {Component, Fragment} from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import MoreButton from './components/MoreButton'
import ResetButton from './components/ResetButton'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

class App extends Component {

  render() {
    const {classes} = this.props

    return (
      <Fragment>
        <CssBaseline />
        <Container className="app">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <SushiContainer />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.buttonContainer}>
              <MoreButton />
              <ResetButton />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Table />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(styles, {withTheme: true})(App)
