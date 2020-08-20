import React from 'react';
import logo from './logo.svg';
import './App.css';
import MailForm from './MailForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MailForm/>
      </header>
    </div>
  );
}

export default App;
