import React, {Component} from 'react';
import './App.css';
import MainMap from "./EventsMap";


class App extends Component {

  state = {
    events: [],
    places: []
  }

  componentDidMount() {
    this.getEvents()
    this.getPlaces()
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

  getPlaces() {
    fetch(
      'https://isa-cors-proxy.herokuapp.com/api/rest/events.json'
    )
      .then(response => response.json())
      .then(
        events => events.map(
          event => fetch('https://isa-cors-proxy.herokuapp.com/api/rest/places.json?id=' + event.id)
            .then(response => response.json())
            .then(
              // places => places.map(
                places => this.setState({
                  places: places
                })
              // )
            )
        )
      )
  }


  render() {
    return (
      <MainMap/>
    )
  }
}

export default App
