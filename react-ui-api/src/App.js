import React from 'react';
import './App.css';
import Search from './Search'
import Modal from './Modal'

function App() {
  return (
    <div className="App">
      <div className="intro">NASA APOD</div>
      <Search />
      <Modal />
      <div className="footer">footer</div>
    </div>
  );
}

export default App;