import React, { Component } from 'react';
import AuthorsList from './containers/AuthorsList/AuthorsList';
import data from './data/data.json';

import './App.css';

class App extends Component {
  render() {
    data.sort((a, b) => b.pageviews - a.pageviews);
    data.forEach((author, index) => { author.topPlace = index; });
    return (
      <div className="App">
        <AuthorsList data={ data } />
      </div>
    );
  }
}

export default App;
