import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import './EventList.css'

class EventsList extends Component {
  render() {
    return (
      <Fragment>
      <ul className="events-list event-list__wrapper">
        {
          this.props.events.map(
            event => (
              <li
                className="event-item"
                key={event.id}
              >
                <Link
                  className="event-title"
                  to={'/events/' + event.id}>
                  {event.name}
                </Link>
                <p className="event-description">{event.descShort}</p>
                <Link
                  className="description-button"
                  to={'/events/' + event.id}>
                  Zobacz więcej
                </Link>
              </li>
            )
          )
        }
      </ul>
      </Fragment>
    );
  }
}

export default EventsList;


