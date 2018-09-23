import React, {Component, Fragment} from 'react'

class SingleEvent extends Component {
  render() {

    return (
      this.props.event === undefined ?
        <p>Loading event data...</p> :
      <Fragment>
        <h1>{this.props.event.name}</h1>

        {
          this.props.event.attachments.map(image => (<img src={image.fileName}/>))
        }

        <p>Rozpoczęcie: {this.props.event.startDate}</p>
        <p>Zakończenie: {this.props.event.endDate}</p>
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
        <p>{this.props.event.descLong}</p>


      </Fragment>
    )
  }
}

export default SingleEvent
