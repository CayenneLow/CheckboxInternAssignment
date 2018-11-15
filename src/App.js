import React, { Component } from 'react';
import './App.css';
import {api_calling} from './components/apidata.js';
import PlanetTable from './components/table.js';

class App extends Component {
  state = { data: []};
  componentDidMount() {
    api_calling().then(data => {
      this.setState({ data: data })
      console.log(this.state.data)
    });
  }

  render() {
    return (<PlanetTable data={this.state.data}/>)
  }
}

export default App;
