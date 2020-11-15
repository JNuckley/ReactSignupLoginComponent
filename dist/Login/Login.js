import PropTypes from 'prop-types';
import React from 'react';
import './Login.css';

var Login = function Login(_ref) {
  var handleShowSignup = _ref.handleShowSignup,
      handleShowRecover = _ref.handleShowRecover,
      handleLogin = _ref.handleLogin,
      handleChange = _ref.handleChange,
      username = _ref.username,
      password = _ref.password,
      usernameCustomLabel = _ref.usernameCustomLabel,
      passwordCustomLabel = _ref.passwordCustomLabel,
      recoverPasswordCustomLabel = _ref.recoverPasswordCustomLabel,
      goToSignupCustomLabel = _ref.goToSignupCustomLabel,
      submitLoginCustomLabel = _ref.submitLoginCustomLabel;
  return React.createElement(
    'section',
    { id: 'login-form' },
    React.createElement(
      'div',
      { id: 'fields' },
      React.createElement('input', {
        className: 'inputBox',
        type: 'text',
        id: 'username',
        name: 'username',
        placeholder: usernameCustomLabel,
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: username
      }),
      React.createElement('input', {
        className: 'inputBox',
        type: 'password',
        id: 'password',
        name: 'password',
        placeholder: passwordCustomLabel,
        onChange: function onChange(e) {
          return handleChange(e.target.name, e.target.value);
        },
        value: password
      })
    ),
    React.createElement(
      'div',
      { className: 'buttonsWrapper' },
      React.createElement(
        'div',
        {
          className: 'recoverPasswordWrapper'
        },
        React.createElement(
          'button',
          {
            id: 'recover-password',
            className: 'button',
            type: 'button',
            onClick: function onClick() {
              handleShowRecover('isRecoveringPassword', true);
            }
          },
          recoverPasswordCustomLabel
        )
      ),
      React.createElement(
        'button',
        {
          id: 'signup-button',
          type: 'button',
          className: 'button',
          onClick: function onClick() {
            handleShowSignup('isLogin', false);
          }
        },
        goToSignupCustomLabel
      ),
      React.createElement('input', {
        id: 'submit-login',
        name: 'submit-login',
        value: submitLoginCustomLabel,
        type: 'submit',
        className: 'button',
        onClick: handleLogin
      })
    )
  );
};

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
  submitLoginCustomLabel: PropTypes.string.isRequired
};

// Login.defaultProps = {
//   styles: {},
// };

export default Login;