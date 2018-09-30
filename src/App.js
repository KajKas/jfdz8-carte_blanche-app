import React, {Component} from 'react';
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
    activeCategories: []
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

  enableCategory = (categoryId) => {
    this.setState({ activeCategories: this.state.activeCategories.concat(categoryId) })
  }
  filterEvents = () => {
    return this.state.events
  }

  deleteActiveCategory = (activeCategoryId) => {
    this.setState({
      activeCategories: this.state.activeCategories.filter((actCat => actCat !== ('' + activeCategoryId)))
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
                <SignUpForm/>
            </li>

            <li>
              <Link to="/preferencesForm">Preferencje</Link>
            </li>

            <li>
              <Link to="/eventsMap">Mapa wydarzeń</Link>
            </li>

            <li>
              <Link to="/eventsList">Lista wydarzeń</Link>
            </li>
          </ul>

          <Route
            path="/preferencesForm"
            render={(props) => (
              <PreferencesForm
                activeCategories={this.state.activeCategories}
                enableCategory={this.enableCategory}
                deleteActiveCategory={this.deleteActiveCategory}
              />
            )}
          />
          <Route
            path="/eventsMap"
            render={() => (
              <EventsMap
                events={this.filterEvents()}
              />
            )}
          />
          <Route
            path="/eventsList"
            render={() => (
              <EventsList
                events={this.filterEvents()}
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
