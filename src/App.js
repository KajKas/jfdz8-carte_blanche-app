import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import EventsMap from "./EventsMap";
import EventsList from "./EventsList";
import SignUpForm from "./SignUpForm"
import SingleEvent from "./SingleEvent";
import PreferencesForm from "./PreferencesForm";
import firebase from 'firebase';

class App extends Component {
    state = {
        events: [],
        user: null,
    }

    createAccount = (event, email, password) => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    logIn = (event, email, password) => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    signOut = (event) => {
        event.preventDefault()
        firebase.auth().signOut()
    }

    componentDidMount() {
        this.getEvents()
        firebase.auth().onAuthStateChanged(
            user => this.setState({user})
        )
    }

    getEvents() {
        let eventsPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/events.json').then(response => {
            return response.json()
        });
        let placesPromise = fetch('https://isa-cors-proxy.herokuapp.com/api/rest/places.json').then(response => {
            return response.json()
        });

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
            eventsWithPlaces => this.setState({events: eventsWithPlaces})
        )
    }

    render() {
        return <Router>
            <Fragment>
                <div className="hero">
                    <div className="topbar">
                        <div className="topbar-menu">
                            <div>
                                <Link className="topbar-button topbar-button-1" to="/preferencesForm">Twój wybór</Link>
                            </div>
                            <div>
                                <Link className="topbar-button topbar-button-2" to="/eventsMap">Mapa wydarzeń</Link>
                            </div>
                            <div>
                                <Link className="topbar-button topbar-button-3" to="/eventsList">Lista wydarzeń</Link>
                            </div>
                        </div>
                        <div>
                            {this.state.user && <button
                                onClick={this.signOut}
                                className="form-button logout-button"
                            >
                                Wyloguj się
                            </button>}
                        </div>
                    </div>
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
                                <SingleEvent
                                    event={this.state.events.find(event => event.id === parseInt(props.match.params.eventId))}/>
                            )
                        }
                    />

                    {!this.state.user && <SignUpForm
                        createAccount={this.createAccount}
                        logIn={this.logIn}
                    />}

                </div>
            </Fragment>
        </Router>
    }
}

export default App
