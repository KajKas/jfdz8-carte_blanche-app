import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import EventsMap from "./EventsMap";
import EventsList from "./EventsList";
import SingleEvent from "./SingleEvent";


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
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/eventsMap" events={this.state.events}>Map of events</Link>
            </li>

            <li>
              <Link to="/eventsList">List of events</Link>
            </li>
          </ul>

          <Route exact path="/" render={() => 'Enter your preferences'}/>
          <Route
            path="/eventsMap"
            render={() => (
              <EventsMap
                events={this.state.events}
              />
            )}
          />
          <Route
            path="/eventsList"
            render={() => (
              <EventsList
                events={this.state.events}
              />
            )}
          />
          <Route
          path="/events/:eventId"
          render={
            (props) => (
              <SingleEvent event={this.state.events.find(event => event.id === parseInt(props.match.params.eventId))}/>
            )
          }/>
        </div>
      </Router>
    )
  }
}

export default App
