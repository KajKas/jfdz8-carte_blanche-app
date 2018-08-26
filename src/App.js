import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    fetch(
      '/api/rest/events.json',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        events: data
      })
    )
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
