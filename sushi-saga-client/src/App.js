import React, {Component} from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

class App extends Component {

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App
