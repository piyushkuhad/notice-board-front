import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback } from 'react';
import MapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { MAP_BOX_ACCESS_KEY } from '../../utils/env_var';

const MAPBOX_TOKEN = MAP_BOX_ACCESS_KEY;

const ReactMapBox = (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.locObj.lat ? props.locObj.lat : 20.5937,
    longitude: props.locObj.lng ? props.locObj.lng : 78.9629,
    zoom: 5,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback((newViewport) => {
    console.log('newViewport', newViewport);
    return setViewport(newViewport);
  }, []);

  const onGeocodeInpSet = (result) => {
    console.log('Result', result);
  };

  return (
    <div style={{ height: '100vh' }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
      />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-right"
          countries={'IN'}
          enableEventLogging={false}
          onResult={onGeocodeInpSet}
          reverseGeocode={true}
        />
      </MapGL>
    </div>
  );
};

export default ReactMapBox;
