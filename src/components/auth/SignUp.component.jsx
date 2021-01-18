import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MuiPhoneNumber from 'material-ui-phone-number';

import './Auth.styles.scss';

const SignUp = ({ initialValues }) => {
  const [formValues, setFormValues] = React.useState(initialValues);

  const onFieldChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickBool = (fieldName) => {
    setFormValues({ ...formValues, [fieldName]: !formValues[fieldName] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitHandler = () => {
    console.log('Form Values', formValues);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler();
  };

  const handleMobileFieldChange = (value) => {
    setFormValues((prevState) => ({
      ...prevState,
      mobileNumber: value,
    }));
  };

  return (
    <div className="cm-sign-in-container cm-auth-inner-container">
      <h1>Sign Up.</h1>
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="cm-auth-form"
        autoComplete="off"
      >
        <div className="cm-flex-type-1">
          <div className="cm-form-field cm-col-half">
            <TextField
              label="Full Name"
              variant="outlined"
              type="text"
              name="fullName"
              fullWidth
              onChange={onFieldChange}
              value={formValues.fullName}
            />
          </div>
          <div className="cm-form-field cm-col-half">
            <MuiPhoneNumber
              defaultCountry={'in'}
              onlyCountries={['in', 'us', 'ca']}
              onChange={handleMobileFieldChange}
              name="mobileNumber"
              fullWidth
              label="Mobile Number(Optional)"
              variant="outlined"
              value={formValues.mobileNumber}
            />
          </div>
        </div>
        <div className="cm-form-field">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            fullWidth
            onChange={onFieldChange}
            value={formValues.email}
          />
        </div>
        <div className="cm-flex-type-1">
          <FormControl
            className="cm-form-field cm-col-half"
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={formValues.showPassword ? 'text' : 'password'}
              value={formValues.password}
              onChange={onFieldChange}
              fullWidth
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickBool('showPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formValues.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={75}
            />
          </FormControl>
          <FormControl
            className="cm-form-field cm-col-half"
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              type={formValues.showConfirmPassword ? 'text' : 'password'}
              value={formValues.confirmPassword}
              onChange={onFieldChange}
              fullWidth
              name="confirmPassword"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickBool('showConfirmPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formValues.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={140}
            />
          </FormControl>
        </div>
        <div className="cm-form-field">
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.rememberMe}
                onChange={() => handleClickBool('rememberMe')}
                name="rememberMe"
                color="primary"
              />
            }
            label="Accept terms and conditions."
          />
        </div>
        <Button
          onClick={onSubmitHandler}
          color="primary"
          variant="contained"
          //disabled={formErr.isFormErr}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  initialValues: PropTypes.exact({
    fullName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    showPassword: PropTypes.bool,
    showConfirmPassword: PropTypes.bool,
    rememberMe: PropTypes.bool,
    mobileNumber: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  initialValues: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    showPassword: false,
    showConfirmPassword: false,
    rememberMe: false,
  },
};

export default SignUp;
