import React, { Component } from 'react'

class EventsList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.events.map(
                        event => (
                            <li key={event.id}>
                                {event.name}
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

export default EventsList;
