import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import checkToken from '../../store/entities/Home/thunk';
import Header from '../../shared/Header';

import './style.css';

export default function RegisterPassword() {
  const dispatch = useDispatch();

  const { token } = useParams();

  useEffect(() => {
    if (token) {
      dispatch(checkToken(token));
    }
  }, []);

  return (

    <div className="home-wrap">

      <Header />

    </div>
  );
}
