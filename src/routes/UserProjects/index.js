/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../shared/Header';
import LeftSidebar from '../../shared/LeftSidebar';
import ProjectItem from '../../shared/ProjectItem';
import { getByUser } from '../../store/entities/Project/thunk';
import './style.css';

export default function Projects() {
  console.log('===render Projects===');
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getByUser());
  }, []);

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
          <div className="projects-list">
            {
            projects.map((project) => (
              <ProjectItem
                key={project.id}
                name={project.name}
                background={project.background}
                id={project.id}
              />
            ))
            }
          </div>

        </div>
      </div>

    </div>
  );
}
