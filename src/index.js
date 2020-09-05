import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
import NavBar from "./NavBar";
import Demo from "./Calculator2";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <App />
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);
