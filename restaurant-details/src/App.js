// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {obj} from "./data/data"
import { RestauranDetails } from './Restaurant/RestauranDetails';
import SearchAppBar from './navbar';

function App() {


  return (
    <div className="App">
      <SearchAppBar />
    <RestauranDetails dataParam={obj}/>
    </div>
  );
}

export default App;
