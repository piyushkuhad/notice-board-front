import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';

import './MapComp.styles.scss';
import darkLogo from '../../assets/images/NB_logo_dark.png';
import { Link } from 'react-router-dom';

const marks = [
  {
    value: 10,
    label: '1km',
  },
  {
    value: 20,
    label: '2km',
  },
  {
    value: 50,
    label: '5km',
  },
  {
    value: 100,
    label: '10km',
  },
];

const mapStyles = {
  backgroundImage: `url('https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png')`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
};

const MapComp = ({ initialValues }) => {
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

  const valuetext = (value) => `${value}km`;

  const valueLabelFormat = (value) => {
    //console.log('Value', value);
    return value / 10 + 'km';
    //return marks.findIndex((mark) => mark.value === value) + 1;
    //return marks.find((mark) => mark.value === value);
  };

  return (
    <div className="cm-map-comp-container">
      <div className="cm-map-comp-sidebar cm-scroll">
        <div className="cm-sidebar-logo cm-sidebar-col">
          <img src={darkLogo} alt="Notice Board" />
        </div>
        <div className="cm-set-location-form cm-sidebar-col">
          <p>Search for anything at any location within a radius.</p>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="cm-form-field cm-loc-name-field cm-flex-type-1">
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
              <Tooltip title="Get your current location">
                <IconButton
                  aria-label="Get your current location"
                  className="cm-current-loc-btn"
                >
                  <MyLocationIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="cm-form-field">
              <TextField
                label="Search term(optional)"
                variant="outlined"
                type="text"
                name="searchTerm"
                fullWidth
                InputLabelProps={{ shrink: true }}
                onChange={onFieldChange}
                value={formValues.searchTerm}
              />
            </div>
            <div className="cm-form-field">
              <p className="cm-form-label">Set Radius (in Km):</p>
              <Slider
                defaultValue={10}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="on"
                marks={marks}
              />
            </div>
            <div className="cm-flex-type-1">
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmitHandler}
              >
                Search
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/"
              >
                Go Back
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="cm-map-comp-main-wrapper" style={mapStyles}></div>
    </div>
  );
};

MapComp.propTypes = {
  initialValues: PropTypes.exact({
    locationName: PropTypes.string,
    searchTerm: PropTypes.string,
    radius: PropTypes.number,
  }),
};

MapComp.defaultProps = {
  initialValues: {
    locationName: '',
    searchTerm: '',
    radius: 0,
  },
};

export default MapComp;
