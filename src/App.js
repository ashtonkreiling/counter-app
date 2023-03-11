import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component{
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  };

  handleReset = () => {
    this.setState({counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]});
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters: counters});
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counter.value > 0) {
      counters[index].value--;
    }
    this.setState({counters});
  }

  render () {
  return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <div className='container'>
          <Counters
            counters={this.state.counters} 
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
