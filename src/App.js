import React, {Component} from 'react';
import './App.css';
import EventsList from "./EventsList";
import axios from 'axios'


const proxyRequest = (url, options) => axios.get(
  url,
  {
    proxy: {
      host: 'http://planer.info.pl'
    },
    ...options
});

class App extends Component {

  state = {
    events: [],

  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    proxyRequest(
      '/api/rest/events.json'
    ).then(
      data => this.setState({
        events: data
      })
    )
  }


  render() {
    return (

            <EventsList/>



    );
  }
}

export default App
