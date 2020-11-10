import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import BusinessList from '../businessList/BusinessList';
import SearchBar from '../searchBar/SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};


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