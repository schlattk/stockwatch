import * as React from 'react';
import './App.css';

import * as Mongoose from 'mongoose';

import logo from './logo.svg';

const DB_URI = process.env.DB_URI_STOCKWATCH;

// Cloud MongoDB connection, via URI in .env file
Mongoose.connect({DB_URI:any});

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
