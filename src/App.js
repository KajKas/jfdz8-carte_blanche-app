import React, {Component, Fragment} from 'react';
import './App.css';
import EventsList from "./EventsList";
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
        <Fragment>
            <EventsMap/>
            <EventsList/>
        </Fragment>


    );
  }
}

export default App;
