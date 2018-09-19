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
    let eventsPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/events.json').then(response => { return response.json() });
    let placesPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/places.json').then(response => { return response.json() });

    placesPromise.then(
      places => places.reduce(
        (result, next) => {
          result[next.id] = next
          return result
        }, {}
      )
    ).then(
      placesObject => eventsPromise.then(
        events => events.map(
          event => ({
            ...event,
            place: placesObject[event.place.id]
          })
        )
      )
    ).then(
      eventsWithPlaces => this.setState({ events: eventsWithPlaces })
    )
  }


  render() {
    return (
      <EventsMap events={this.state.events}/>

    )
  }
}

export default App
