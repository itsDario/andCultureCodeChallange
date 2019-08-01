import React, { Component } from 'react';
import './App.scss';
import BarContainer from './containers/BarContainer';
import HeaderContainer from './containers/HeaderContainer';


class App extends Component {
  // <BarContainer sushi={this.state.sushi} setEaten={this.setEaten} />
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <BarContainer />
      </div>
    );
  }
}

export default App;
