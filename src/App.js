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
          event => fetch('https://isa-cors-proxy.herokuapp.com/api/rest/places.json?id=' + event.place.id)
            .then(response => response.json())
            .then(
              places => places.map(
                places => this.setState({
                  places: places
                })
              )
            )
        )
      )
  }

  getPlaces = () => {
    let eventsPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/events.json').then(response => { return response.json() });
    let placesPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/places.json?id=' + event.place.id).then(response => { return response.json() });
    Promise.all([eventsPromise, placesPromise]).then(response => {
      return response[0].map(list => response[1].filter(item => item.listId === list.id))[0]
    }).then(response => {
      response.map(places => this.setState({places: places}))
    })
  }


  render() {
    return (
      <MainMap/>
    )
  }
}

export default App
