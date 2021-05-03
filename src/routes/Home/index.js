import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { Redirect } from 'react-router';

import checkToken from '../../store/entities/Home/thunk';
import Header from '../../shared/Header';
import LeftSidebar from '../../shared/LeftSidebar';
import './style.css';

export default function Home() {
  const dispatch = useDispatch();
  // const { logining } = useSelector((state) => state.logining);

  const { token } = useParams();

  useEffect(() => {
    if (token) {
      dispatch(checkToken(token));
    }
  }, []);

  return (

    <div className="home-wrap">

      {/* {!logining && <Redirect to="/auth/login" />} */}

      <Header />

      <div className="home-main-container">

        <LeftSidebar home="active" />

        <div className="home-content">
          <img src="https://miro.medium.com/max/1024/1*XCy1ozJfX4MzIj5xk5OCtA.png" alt="content" />
          <h3>Будьте в курсе</h3>
          <span>
            Здесь будут отображаться все важные и актуальные события и изменения в проектах,
            в которых Вы создатель или приглашенный участник.
          </span>
        </div>
      </div>

    </div>
  );
}
