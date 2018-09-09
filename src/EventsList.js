import React, { Component } from 'react'

class EventsList extends Component {
    render() {

        const size = 5;
        return (
            <ul>
                {
                    this.props.events.slice(0, size).map(
                        event => (
                            <li key={event.id}>
                                <a href={event.urls} > {event.name} </a>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

export default EventsList;


