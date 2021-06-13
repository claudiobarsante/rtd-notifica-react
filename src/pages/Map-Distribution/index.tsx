import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapDistribution = () => {
  const key = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <LoadScript googleMapsApiKey={`${key}`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapDistribution);
