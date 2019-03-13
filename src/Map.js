import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {title, p1, p2, p3, p4, className, id} = this.props
    return (
      <div className='map info-six' id="map">
        <div className="pa4 pb4 f2 map">Map</div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 51.5475466,
          lng: -0.0246041
          }}
        />
      </div> 
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQXZ0R4z8Jh0dL_5EkXREphusFS8_zCto'
})(MapContainer);