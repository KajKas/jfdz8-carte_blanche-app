import React, {Component} from 'react';
import './App.css';
import MainMap from "./EventsMap";


class App extends Component {

  state = {
    events: [],
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    fetch(
      'https://isa-cors-proxy.herokuapp.com/api/rest/events.json'
    )
      .then(response => response.json())
      .then(
      data => this.setState({
        events: data
      })
    )
  }


  render() {
    return (
      <MainMap/>
    )
  }
}

export default App
