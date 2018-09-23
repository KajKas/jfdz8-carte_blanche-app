import React, {Component, Fragment} from 'react'

class SingleEvent extends Component {

  state = {
    position: [],
    lat: '',
    lng: ''
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }

  formatDate(stringDate) {
    const date = new Date(stringDate)

    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()

    if (day < 10) {
      day = '0' + day
    }
    if (month < 10) {
      month = '0' + month
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    return day + '-' + month + '-' + year + '  ' + hour + ':' + minutes
  }

  transport() {

  }

  render() {

    return (
      this.props.event === undefined ?
        <p>Loading event data...</p> :
        <Fragment>
          <h1>{this.props.event.name}</h1>
          {
            this.props.event.attachments.map(image => (<img src={image.fileName}/>))
          }
          <p>Rozpoczęcie: {this.formatDate(this.props.event.startDate)}</p>
          <p>Zakończenie: {this.formatDate(this.props.event.endDate)}</p>
          <p>Organizator: {this.props.event.organizer.designation}</p>
          <p>Miejsce wydarzenia: {this.props.event.place.name}</p>
          <p>Ceny biletów:
            {
              this.props.event.tickets.startTicket ?
              ' ' + this.props.event.tickets.startTicket + 'zł - ' + this.props.event.tickets.endTicket + 'zł' :
              ' nieznane'
            }
          </p>
          <p>Strona wydarzenia: <a href={this.props.event.urls.www}>{this.props.event.urls.www}</a></p>
          <div dangerouslySetInnerHTML={{__html: this.props.event.descLong}} />
          <a href={'https://jakdojade.pl/trojmiasto/trasa/?tc=' + this.props.event.place.address.lat + ':' + this.props.event.place.address.lng + '&fc=' + this.state.lat + ':' + this.state.lng}>
            Jak dojadę?
          </a>
        </Fragment>
    )
  }
}

export default SingleEvent
