import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import IconBar from '../Menu/IconBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IconBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
