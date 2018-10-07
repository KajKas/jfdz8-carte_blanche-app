import React, {Component} from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet';
import {Link} from "react-router-dom";
import './EventsMap.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class EventsMap extends Component {

  state = {
      currentPosition: [54.347628, 18.6452029],
      position: []
  }

  componentWillMount() {
    // navigator.geolocation.getCurrentPosition(position => {
    //   // console.log(position.coords)
    //   this.setState({
    //     currentPosition: [position.coords.latitude, position.coords.longitude]
    //   })
    // })
  }

  render() {
    return (
      <div className="event-map-wrapper">
        {
          this.state.currentPosition ?
            <Map center={this.state.currentPosition} zoom={13} className='event-map'>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {
                this.props.activeCategories.length>=1
                ? (this.props.events.filter(activeEvent => activeEvent.categoryId === Number(this.props.activeCategories)).map(
                  event => (
                    <Marker key={event.id} position={[Number(event.place.address.lat), Number(event.place.address.lng)]}>
                      <Popup><Link to={'/events/' + event.id}> {event.name}</Link><br/>{event.descShort}</Popup>
                    </Marker>
                  )
                ))
                : (this.props.events.map(
                  event => (
                    <Marker key={event.id} position={[Number(event.place.address.lat), Number(event.place.address.lng)]}>
                      <Popup><Link to={'/events/' + event.id}> {event.name}</Link><br/>{event.descShort}</Popup>
                    </Marker>
                  )
                ))
              }
            </Map> : null
        }
      </div>
    )
  }
}

export default EventsMap
