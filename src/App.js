import React, {Component} from 'react';
import './App.css';
import EventsList from "./EventsList";
/*import axios from 'axios'*/


class App extends Component {

  state = {
    events: [],

  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    fetch('/api/rest/events.json')
        .then(response => response.json())
        .then(
      data => this.setState({
        events: data
      })
    )
  }


  render() {
    return (
            <EventsList events={this.state.events}/>
    );
  }
}

export default App
