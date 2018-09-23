import React, {Component, Fragment} from 'react'

class SingleEvent extends Component {


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


      </Fragment>
    )
  }
}

export default SingleEvent
