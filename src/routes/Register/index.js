import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';

import { checkToken, register, registerGapi } from '../../store/entities/Register/thunk';
import { gapiInit, googleSignIn } from '../../utils/googleSignin';
import Header from '../../shared/Header';

import './style.css';

export default function Register() {
  const dispatch = useDispatch();
  const { token } = useParams();

  const { loading, message } = useSelector((state) => state.register);

  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(false);

  async function handleGSignInClick() {
    const { email, name } = await googleSignIn();
    console.log(email, name);

    dispatch(registerGapi({
      email,
      name,
    }));
  }

  async function handleSignInClick() {
    dispatch(register({
      email: inputEmailValue,
      name: inputNameValue,
      password: inputPasswordValue,
    }));
  }

  useEffect(() => {
    if (token) {
      dispatch(checkToken(token));
      return;
    }
    gapiInit();
  }, []);

  useEffect(() => {
    if (!inputConfirmPasswordValue) {
      setConfirmPassword(false);
      return;
    }

    if (inputConfirmPasswordValue !== inputPasswordValue) {
      setConfirmPassword(false);
      return;
    }

    if (inputPasswordValue === inputConfirmPasswordValue) {
      setConfirmPassword(true);
    }
  }, [inputConfirmPasswordValue, inputPasswordValue]);

  const shouldRedirect = localStorage.access_token && !loading;
  const shouldDisabled = !inputEmailValue || !inputNameValue || !confirmPassword || loading;

  return (

    <div className="auth-wrap">

      {shouldRedirect
                && <Redirect to="/" />}

      <Header />

      <div className="auth-form-container">

        <span className="auth-title">
          РЕГИСТРАЦИЯ
        </span>
        <span className="auth-message">
          {message}
        </span>

        <input
          type="text"
          className="auth-form-email-input"
          placeholder="Email..."
          onChange={(e) => setInputEmailValue(e.target.value)}
        />

        <input
          type="text"
          className="auth-form-name-input"
          placeholder="Name..."
          onChange={(e) => setInputNameValue(e.target.value)}
        />

        <input
          type="password"
          className="auth-form-password-input"
          placeholder="Password..."
          onChange={(e) => setInputPasswordValue(e.target.value)}
        />

        <input
          type="password"
          className="auth-form-password-input"
          placeholder="Confirm password..."
          onChange={(e) => setInputConfirmPasswordValue(e.target.value)}
        />

        <button
          className="auth-form-button"
          disabled={shouldDisabled}
          onClick={handleSignInClick}
        >
          Отправить
        </button>

        {!token
                && (
                <button
                  className="auth-form-button"
                  onClick={handleGSignInClick}
                >
                  Google
                </button>
                )}

      </div>
    </div>
  );
}
