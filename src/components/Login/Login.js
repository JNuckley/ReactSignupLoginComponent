import PropTypes from 'prop-types';
import React from 'react';
import './Login.css';

const Login = ({
  handleShowSignup,
  handleShowRecover,
  handleLogin,
  handleChange,
  username,
  password,
  usernameCustomLabel,
  passwordCustomLabel,
  recoverPasswordCustomLabel,
  goToSignupCustomLabel,
  submitLoginCustomLabel,
}) => (
  <section id="login-form">
    <div id="fields">
      <input
        className="inputBox"
        type="text"
        id="username"
        name="username"
        placeholder={usernameCustomLabel}
        onChange={e => handleChange(e.target.name, e.target.value)}
        value={username}
      />
      <input
        className="inputBox"
        type="password"
        id="password"
        name="password"
        placeholder={passwordCustomLabel}
        onChange={e => handleChange(e.target.name, e.target.value)}
        value={password}
      />
    </div>
    <div className="buttonsWrapper">
      <div
        className="recoverPasswordWrapper"
      >
        <button
          id="recover-password"
          className="button"
          type="button"
          onClick={() => {
            handleShowRecover('isRecoveringPassword', true);
          }}
        >
          {recoverPasswordCustomLabel}
        </button>
      </div>
      <button
        id="signup-button"
        type="button"
        className="button"
        onClick={() => {
          handleShowSignup('isLogin', false);
        }}
      >
        {goToSignupCustomLabel}
      </button>
      <input
        id="submit-login"
        name="submit-login"
        value={submitLoginCustomLabel}
        type="submit"
        className="button"
        onClick={handleLogin}
      />
    </div>
  </section>
);

Login.propTypes = {
  handleShowSignup: PropTypes.func.isRequired,
  handleShowRecover: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  // styles: PropTypes.shape({
  //   wrapper: PropTypes.object,
  //   inputWrapper: PropTypes.object,
  //   buttonsWrapper: PropTypes.object,
  //   input: PropTypes.object,
  //   recoverPasswordWrapper: PropTypes.object,
  //   recoverPasswordButton: PropTypes.object,
  //   button: PropTypes.object,
  // }),
  usernameCustomLabel: PropTypes.string.isRequired,
  passwordCustomLabel: PropTypes.string.isRequired,
  recoverPasswordCustomLabel: PropTypes.string.isRequired,
  goToSignupCustomLabel: PropTypes.string.isRequired,
  submitLoginCustomLabel: PropTypes.string.isRequired,
};

// Login.defaultProps = {
//   styles: {},
// };

export default Login;
