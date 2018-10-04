import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './EventList.css'

class EventsList extends Component {
  render() {
    return (
      <ul className="events-list event-list__wrapper">
        {
          this.props.events.map(
            event => (
              <li
                className="event-item"
                key={event.id}
              >
                <Link to={'/events/' + event.id}> {event.name}</Link>
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


