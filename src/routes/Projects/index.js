import { React } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

import Header from '../../shared/Header';
import LeftSidebar from '../../shared/LeftSidebar';
import './style.css';

export default function Projects() {
  return (

    <div className="projects-wrap">

      <Header />

      <div className="projects-main-container">

        <LeftSidebar projects="active" />

        <div className="projects-content">
          <img src="https://eitrawmaterials.eu/wp-content/uploads/2019/10/shutterstock_773293384-3.jpg" alt="content" />
          <h3>Ваши проекты</h3>
          <span>
            Здесь будут отображаться все незавершенные проекты,
            в которых Вы создатель или приглашенный участник.
          </span>
        </div>
      </div>

    </div>
  );
}
