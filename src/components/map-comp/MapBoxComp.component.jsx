import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import './MapBoxComp.styles.scss';
import darkLogo from '../../assets/images/NB_logo_dark.png';
import { MAP_BOX_ACCESS_KEY } from '../../utils/env_variables';
import pinIcon from '../../assets/images/pin.png';

mapboxgl.accessToken = MAP_BOX_ACCESS_KEY;

const MapBoxComp = (props) => {
  const [loc, setLoc] = React.useState({
    lng: !!props.locObj.lng ? props.locObj.lng : 78.9629,
    lat: !!props.locObj.lat ? props.locObj.lat : 20.5937,
    zoom: !!props.locObj.lng ? 15 : 2,
  });

  const [formValues, setFormValues] = React.useState({
    radius: 0.5,
  });

  const [mapRefs, setMapRefs] = React.useState({
    map: null,
  });

  const mapContainer = React.useRef(null);

  const onFieldChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    console.log('Form Values');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler();
  };

  const createGeoJSONCircle = function (center, radiusInKm, points) {
    if (!points) points = 64;

    var coords = {
      latitude: center[1],
      longitude: center[0],
    };

    var km = radiusInKm;

    var ret = [];
    var distanceX = km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
    var distanceY = km / 110.574;

    var theta, x, y;
    for (var i = 0; i < points; i++) {
      theta = (i / points) * (2 * Math.PI);
      x = distanceX * Math.cos(theta);
      y = distanceY * Math.sin(theta);

      ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);

    return {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [ret],
            },
          },
        ],
      },
    };
  };

  React.useEffect(() => {
    if (!!props.locObj.lng && !!props.locObj.lat) {
      // mapRefs.map.flyTo({
      //   center: [props.locObj.lng.toFixed(4), props.locObj.lat.toFixed(4)],
      //   zoom: 15,
      // });
      // mapRefs.marker.setLngLat([
      //   props.locObj.lng.toFixed(4),
      //   props.locObj.lat.toFixed(4),
      // ]);

      setLoc({
        ...loc,
        lng: props.locObj.lng.toFixed(4),
        lat: props.locObj.lat.toFixed(4),
      });
    }
    // eslint-disable-next-line
  }, [props]);

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [loc.lng, loc.lat],
      zoom: loc.zoom,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
      map.addSource(
        'polygon',
        createGeoJSONCircle(
          [parseFloat(loc.lng), parseFloat(loc.lat)],
          parseFloat(formValues.radius)
        )
      );
      //map.addSource('polygon', createGeoJSONCircle([loc.lng, loc.lat], 0.5));

      map.addLayer({
        id: 'polygon',
        type: 'fill',
        source: 'polygon',
        layout: {},
        paint: {
          'fill-color': 'blue',
          'fill-opacity': 0.4,
        },
      });
    });

    //Add geolocate control to the map.
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      showAccuracyCircle: false,
      trackUserLocation: true,
      showUserLocation: false,
    });
    map.addControl(geolocate);
    geolocate.on('geolocate', (position) => {
      //console.log('Position', position, position.coords.latitude);
      setLoc({
        ...loc,
        lng: position.coords.longitude.toFixed(4),
        lat: position.coords.latitude.toFixed(4),
        zoom: 15,
      });
    });

    setMapRefs({ ...mapRefs, map });

    map.on('dragend', () => {
      // console.log('Drag', createGeoJSONCircle([loc.lng, loc.lat], 1));

      setLoc({
        ...loc,
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!!mapRefs.map && mapRefs.map.getSource('polygon') !== undefined) {
      //console.log('Run', mapRefs.map.getSource('polygon'));

      let dpLng = parseFloat(loc.lng),
        dpLat = parseFloat(loc.lat),
        dpRad = parseFloat(formValues.radius);

      const circleDataPoints = createGeoJSONCircle([dpLng, dpLat], dpRad);

      //console.log('Test', circleDataPoints, dpLng, dpLat, dpRad);

      mapRefs.map.getSource('polygon').setData(circleDataPoints.data);
    }

    // eslint-disable-next-line
  }, [loc, mapRefs, formValues]);

  return (
    <div className="cm-map-box-container">
      <div className="cm-map-box-sidebar">
        <div className="cm-sidebar-logo cm-sidebar-col">
          <img src={darkLogo} alt="Notice Board" />
        </div>
        <div className="cm-current-loc-address cm-flex-type-1">
          <div>
            <h4>Your Location:</h4>
            <p>Sector-9, R.K. Puram, New Delhi</p>
          </div>
          <IconButton aria-label="Change location">
            <EditIcon />
          </IconButton>
        </div>
        <form className="cm-map-box-form" onSubmit={onFormSubmit}>
          <FormControl variant="outlined" className="cm-form-field">
            <InputLabel id="demo-simple-select-outlined-label">
              Radius
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={formValues.radius}
              onChange={onFieldChange}
              label="Radius"
              name="radius"
            >
              <MenuItem value={0.5}>500 Metres</MenuItem>
              <MenuItem value={1}>1 Kilometre</MenuItem>
              <MenuItem value={5}>5 Kilometres</MenuItem>
              <MenuItem value={10}>10 Kilometres</MenuItem>
            </Select>
          </FormControl>
          <div className="cm-flex-type-1">
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmitHandler}
            >
              Search
            </Button>
            <Button variant="outlined" color="primary" component={Link} to="/">
              Go Back
            </Button>
          </div>
        </form>
      </div>
      <div className="cm-map-wrapper">
        <div className="sidebarStyle">
          <div>
            Longitude: {loc.lng} | Latitude: {loc.lat} | Zoom: {loc.zoom}
          </div>
        </div>
        <div ref={mapContainer} className="mapContainer">
          <img src={pinIcon} alt="Current Location" className="cm-marker" />
        </div>
      </div>
    </div>
  );
};

export default MapBoxComp;
