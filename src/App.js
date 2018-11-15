import React, { Component } from 'react';
import './App.css';
import {api_calling} from './components/apidata.js';
import PlanetTable from './components/table.js';
import {Nav} from './components/navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      direction: {
        name: 'asc',
        population: 'asc'
      },
      filtered: []
    }
    this.sortBy = this.sortBy.bind(this)
    this.filterList = this.filterList.bind(this)
  }
  componentDidMount() {
    // run api calls, returns an array of objects(data)
    api_calling().then(data => {
      // set initial state of both data and filtered
      this.setState({ data: data, filtered:data})
    });
  } 

  sortBy(key) {
    // sorting algorithm from: https://gist.github.com/JoeChapman/2158435
    if (this.state.direction[key] === 'asc') {
      this.setState({
        data: this.state.data.sort( (a, b) => {
          if (a[key] === b[key]) {
          return 0;
          }
          if (typeof a[key] === typeof b[key]) {
            return a[key] < b[key] ? -1 : 1;
          }
          return typeof a[key] < typeof b[key] ? -1 : 1;
        }),
        // change directions of sorting
        direction: {
          [key]: this.state.direction[key] === 'asc'
            ? 'desc'
            : 'asc'
        }
      })
      this.setState({
        data: this.state.data.sort( (a,b) => {
          return a[key] - b[key]
        })
      })
    } else {
     this.setState({
        data: this.state.data.sort( (a, b) => {
          if (a[key] === b[key]) {
          return 0;
          }
          if (typeof a[key] === typeof b[key]) {
            return b[key] < a[key] ? -1 : 1;
          }
          return typeof b[key] < typeof a[key] ? -1 : 1;
        }),
        direction: {
          [key]: this.state.direction[key] === 'asc'
            ? 'desc'
            : 'asc'
        }
      })
      // second sort to be applied on population to properly deal with
      // "unknown" value
      this.setState({
        data: this.state.data.sort( (a,b) => {
          return b[key] - a[key]
        })
      }) 
    }
  }

  filterList(query) {
    // copy over data from original data array for mutation
    var updatedList = this.state.data;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        // query is an object, .target.value to access string
        query.target.value.toLowerCase()) !== -1;
    });
    this.setState({filtered: updatedList});
  }

  render() {
    return (
      <div>
        <Nav filterList={this.filterList}/>,
        <PlanetTable data={this.state.filtered} sortBy={this.sortBy}/>
      </div>
      )
  }
}

export default App;
