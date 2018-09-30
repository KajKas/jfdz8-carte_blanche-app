import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import EventsMap from "./EventsMap";
import EventsList from "./EventsList";
import SignUpForm from "./SignUpForm"
import SingleEvent from "./SingleEvent";
import PreferencesForm from "./PreferencesForm";


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
          <Fragment>
          <div className="hero">
        <div className="App">
          <ul className="Topbar">


            <li>
              <Link className="topbar-button" to="/preferencesForm">Preferencje</Link>
            </li>

            <li>
              <Link className="topbar-button" to="/eventsMap">Mapa wydarzeń</Link>
            </li>

            <li>
              <Link className="topbar-button" to="/eventsList">Lista wydarzeń</Link>
            </li>
          </ul>

          <Route path="/preferencesForm" component={PreferencesForm}/>
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
              <div className="sign-up-form">
                  <SignUpForm/>
              </div>
        </div>

          </Fragment>
      </Router>
    )
  }
}

export default App
