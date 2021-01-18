import React from 'react';
import Button from '@material-ui/core/Button';

import './Auth.styles.scss';
import SignIn from '../../components/auth/SignIn.component';
import darkLogo from '../../assets/images/NB_logo_dark.png';
import AnimationComp from '../../components/animation-comp/AnimationComp.component';
import authAnimation from '../../assets/animations/auth.json';
import SignUp from '../../components/auth/SignUp.component';
//import whiteLogo from '../../assets/images/NB_logo_white.png';

const AuthPage = () => {
  const loginContent = {
    type: 'login',
    subHeading: 'Nice to see you again.',
    btnTxt: 'Sign up now',
    heading: 'Welcome back',
  };

  const signUpContent = {
    type: 'signUp',
    subHeading: 'Nice to see you.',
    btnTxt: 'Login',
    heading: 'Get on board',
  };

  const [authType, setAuthType] = React.useState(loginContent);

  const changeAuthType = () => {
    setAuthType((prevState) =>
      prevState.type === 'login' ? signUpContent : loginContent
    );
  };

  return (
    <div className="cm-auth-page-container cm-flex-type-1">
      <div className="cm-auth-left">
        <img src={darkLogo} alt="Notice Board" className="cm-auth-logo" />
        {authType.type === 'login' ? <SignIn /> : <SignUp />}
        <Button
          onClick={changeAuthType}
          color="primary"
          variant="outlined"
          className="cm-auth-switch-btn"
        >
          {authType.btnTxt}
        </Button>
      </div>
      <div className="cm-auth-right">
        <h3>{authType.subHeading}</h3>
        <h1>{authType.heading}</h1>
        <AnimationComp animationData={authAnimation} />
      </div>
    </div>
  );
};

export default AuthPage;
