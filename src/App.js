import React, {Component} from 'react';
import './App.css';
import EventsMap from "./EventsMap";


class App extends Component {

  state = {
    events: [],

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

      <EventsMap/>


    )
  }
}

export default App
