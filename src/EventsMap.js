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
    position: [54.40, 18.57]
  }

  render() {
    return (

      <div >
        <Map center={this.state.position} zoom={13}  style={{height: '400px', width:'400px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={this.state.position}>
            <Popup>A pretty CSS3 popup.<br/>Easily customizable.</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default EventsMap