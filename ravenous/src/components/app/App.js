import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import BusinessList from '../businessList/BusinessList';
import SearchBar from '../searchBar/SearchBar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    );
  }
};

export default App;
// asdflksaj