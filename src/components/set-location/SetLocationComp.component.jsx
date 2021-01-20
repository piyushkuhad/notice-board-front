import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Tooltip from '@material-ui/core/Tooltip';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

import './SetLocationComp.styles.scss';
import history from '../../history';

const SetLocationComp = ({ initialValues, closeHandler }) => {
  const [formValues, setFormValues] = React.useState(initialValues);

  const onFieldChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = () => {
    console.log('Form Values', formValues);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler();
  };

  const getCurrentLocation = (lat, lng) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(
        //   'Lat, Lng :',
        //   position.coords.latitude,
        //   position.coords.longitude
        // );
        history.push(
          `/set-location?lnglat=${position.coords.longitude},${position.coords.latitude}`
        );
      },
      function (err) {
        console.log('Error', err);
      }
    );
  };

  return (
    <div className="cm-set-location-comp-container cm-scroll">
      <IconButton
        aria-label="Close search location popup"
        onClick={closeHandler(false)}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <h3>Search Location</h3>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="cm-form-field cm-loc-name-field">
          <TextField
            label="Enter Location"
            variant="outlined"
            type="text"
            name="locationName"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={onFieldChange}
            value={formValues.locationName}
          />
        </div>
        <Tooltip title="Get your current location">
          <Button
            variant="contained"
            aria-label="Get your current location"
            className="cm-current-loc-btn"
            color="primary"
            onClick={getCurrentLocation}
            startIcon={<MyLocationIcon />}
            fullWidth
            size="large"
          >
            Get Current Location
          </Button>
        </Tooltip>
      </form>
      <div className="cm-user-locations">
        <h3>Saved Locations</h3>
        <div className="cm-saved-locations">
          <Button
            className="cm-saved-location-btn"
            startIcon={
              <>
                <LocationOnIcon />
                <span className="cm-saved-loc-radius">1km</span>
              </>
            }
            fullWidth
            size="large"
          >
            Gurgaon Sector-55
          </Button>
          <Button
            className="cm-saved-location-btn"
            startIcon={
              <>
                <LocationOnIcon />
                <span className="cm-saved-loc-radius">5km</span>
              </>
            }
            fullWidth
            size="large"
          >
            R.K. Puram Sector - 9
          </Button>
          <Button
            className="cm-saved-location-btn"
            startIcon={
              <>
                <LocationOnIcon />
                <span className="cm-saved-loc-radius">0.5km</span>
              </>
            }
            fullWidth
            size="large"
          >
            Dwarka Sector-16
          </Button>
          <Button
            className="cm-saved-location-btn"
            startIcon={
              <>
                <LocationOnIcon />
                <span className="cm-saved-loc-radius">10km</span>
              </>
            }
            fullWidth
            size="large"
          >
            Shahdara
          </Button>
        </div>
      </div>
    </div>
  );
};

SetLocationComp.propTypes = {
  initialValues: PropTypes.exact({
    locationName: PropTypes.string,
    searchTerm: PropTypes.string,
    radius: PropTypes.number,
  }),
};

SetLocationComp.defaultProps = {
  initialValues: {
    locationName: '',
    searchTerm: '',
    radius: 0.5,
  },
};

export default SetLocationComp;
