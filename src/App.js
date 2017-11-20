import React from 'react';
import './App.css';
import Search from './components/Search';

const App =({baseURL}) => (
  <div className="App">
    <div className="App-title">Tunes Searcher</div>
    <Search baseURL={baseURL} />
  </div>
);
  

export default App;
