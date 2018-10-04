import React, {Component, Fragment} from 'react'
import './SingleEvent.css'

class SingleEvent extends Component {

  state = {
    position: [],
    lat: '',
    lng: ''
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }

  formatDate(stringDate) {
    const date = new Date(stringDate)

    let day = date.getDate();
    let months = ['stycznia','lutego','marca','kwietnia','maja',
      'czerwca','lipca','sierpnia','września',
      'października','listopada','grudnia'];
    let thisMonth = new Date();
    let month = months[thisMonth.getMonth()];
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = '0' + minutes
    }

    return day + ' ' + month + ' ' + year + ',  godz. ' + hour + ':' + minutes
  }

  transport() {

  }

  render() {
    return (
      this.props.event === undefined ?
        <p>Loading event data...</p> :
        <Fragment>
          <section className="single-event">
          <h1 className="single-event-title uppercase-blue">{this.props.event.name}</h1>
          {
            this.props.event.attachments.map((image) => (
              <img
                className="single-event-img"
                src={image.fileName}
                alt="Zdjęcie wydarzenia"
              />)).shift()
          }
            <div><p className="single-event-time uppercase-blue single-event_inline single-event_line-height">
              Rozpoczęcie: </p>
              <p className="single-event_inline"> {this.formatDate(this.props.event.startDate)}</p>
            </div>
            <div><p className="single-event-time uppercase-blue single-event_inline single-event_line-height">Zakończenie: </p>
              <p className="single-event_inline">{this.formatDate(this.props.event.endDate)}</p>
            </div>
            <div><p className="single-event-organiser uppercase-blue single-event_inline">Organizator: </p>
              <p className="single-event_inline">{this.props.event.organizer.designation}</p>
            </div>
            <div><p className="single-event-place uppercase-blue single-event_inline">Miejsce wydarzenia: </p>
              <p className="single-event_inline">{this.props.event.place.name}</p></div>
            <div><p className="single-event-ticket_price uppercase-blue single-event_inline">Ceny biletów: </p>
              <p className="single-event_inline">
            {
              this.props.event.tickets.startTicket ?
              ' ' + this.props.event.tickets.startTicket + ' zł - ' + this.props.event.tickets.endTicket + ' zł' :
              ' brak informacji'
            }
          </p></div>
          <div><p className="uppercase-blue single-event_inline">
            Strona wydarzenia: </p> <a className="single-event-link" href={this.props.event.urls.www}>{this.props.event.urls.www}</a>
          </div>
          <div className="single-event-description" dangerouslySetInnerHTML={{__html: this.props.event.descLong}} />
          <a className="single-event-link" href={'https://jakdojade.pl/trojmiasto/trasa/?tc=' + this.props.event.place.address.lat + ':' + this.props.event.place.address.lng + '&fc=' + this.state.lat + ':' + this.state.lng}>
            JAK DOJADĘ?
          </a>
          </section>
        </Fragment>
    )
  }
}

export default SingleEvent
