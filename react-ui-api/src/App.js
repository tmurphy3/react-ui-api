import React from 'react';
import './App.css';
import Search from './Search'
import Modal from './Modal'

function App() {
  return (
    <div className="App">
      <div class="intro">NASA APOD</div>
      <Search />
      <Modal />
      <div class="footer">footer</div>
    </div>
  );
}

export default App;