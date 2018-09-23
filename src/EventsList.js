import React, {Component} from 'react'

class EventsList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.events.map(
            event => (
              <li key={event.id}>
                <a href={event.urls}> {event.name}</a>
                <p>{event.descShort}</p>
              </li>
            )
          )
        }
      </ul>
    );
  }
}

export default EventsList;


