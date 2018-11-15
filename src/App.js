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
    api_calling().then(data => {
      this.setState({ data: data, filtered:data})
      console.log(this.state.data)
    });
  } 

  sortBy(key) {
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
      this.setState({
        data: this.state.data.sort( (a,b) => {
          return b[key] - a[key]
        })
      }) 
    }
  }

  filterList(query) {
    var updatedList = this.state.data;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        query.target.value.toLowerCase()) !== -1;
    });
    console.log(updatedList)
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
