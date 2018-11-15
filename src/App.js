import React, { Component } from 'react';
import './App.css';
import {api_calling} from './components/apidata.js';

class App extends Component {
  state = { data: []};
  componentDidMount() {
    api_calling().then(data => {
      this.setState({ data: data })
      console.log(this.state.data)
    });
  }
  
  render() {
    return <h1> planets </h1>
  }
}

export default App;
