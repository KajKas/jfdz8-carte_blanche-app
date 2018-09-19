import React, {Component} from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class EventsMap extends Component {

  state = {
    position: [54.40, 18.57],
    currentPosition: []
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentPosition: [position.coords.latitude, position.coords.longitude]
      })
    })
    console.log(this.state.currentPosition)
  }



  render() {
    return (
      <div>

        {console.log(this.state.currentPosition)}

        <Map center={this.state.position} zoom={13} style={{height: '400px', width: '400px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {
            this.props.events.map(
              event => (
                <Marker key={event.id} position={[Number(event.place.address.lat), Number(event.place.address.lng)]}>
                  <Popup>{event.name}<br/>{event.descShort}</Popup>
                </Marker>
              )
            )
          }

        </Map>
      </div>
    )
  }
}

export default EventsMap