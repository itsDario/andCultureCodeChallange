import React, { Component } from 'react';
import './App.scss';
import BarContainer from './containers/BarContainer';


class App extends Component {
  // <BarContainer sushi={this.state.sushi} setEaten={this.setEaten} />
  render() {
    return (
      <div className="App">
        <BarContainer className='content' />
      </div>
    );
  }
}

export default App;
