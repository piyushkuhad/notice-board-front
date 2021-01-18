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

import './Auth.styles.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth.action';

const SignIn = ({ initialValues }) => {
  const dispatch = useDispatch();
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
    dispatch(login());
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler();
  };

  return (
    <div className="cm-sign-in-container cm-auth-inner-container">
      <h1>Log In.</h1>
      {/* <p>Log in with your email and password.</p> */}
      <form onSubmit={(e) => onFormSubmit(e)} className="cm-auth-form">
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
        <FormControl className="cm-form-field" variant="outlined" fullWidth>
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
                  {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={75}
          />
        </FormControl>
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
            label="Remember me"
          />
        </div>
        <div className="cm-flex-type-1">
          <Button
            onClick={onSubmitHandler}
            color="primary"
            variant="contained"
            //disabled={formErr.isFormErr}
          >
            Login
          </Button>
          <Button
            onClick={() => {}}
            color="primary"
            style={{ textTransform: 'none' }}
          >
            Forgot Password?
          </Button>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  initialValues: PropTypes.exact({
    email: PropTypes.string,
    password: PropTypes.string,
    showPassword: PropTypes.bool,
    rememberMe: PropTypes.bool,
  }),
};

SignIn.defaultProps = {
  initialValues: {
    email: '',
    password: '',
    showPassword: false,
    rememberMe: false,
  },
};

export default SignIn;
