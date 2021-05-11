/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../shared/Header';
import LeftSidebar from '../../shared/LeftSidebar';
import ProjectItem from '../../shared/ProjectItem';
import ProjectForm from '../../shared/ProjectForm';
import { getByWorkspace } from '../../store/entities/Project/thunk';
import './style.css';

export default function Projects() {
  console.log('===render Projects===');
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);
  const { currentWorkspace } = useSelector((state) => state.project);
  const [projectForm, setProjectForm] = useState(false);
  const { workspaceId } = useParams();

  const handelClikOutsideProject = (e) => {
    const projectCreateElem = document.querySelector('.project-create-button');
    const projectShowElem = document.querySelector('.project-create');
    const projectFormElem = document.querySelector('.project-form-container');
    if (e.composedPath().includes(projectShowElem)) {
      return;
    }
    if (e.composedPath().includes(projectCreateElem)) {
      setProjectForm(false);
      document.removeEventListener('click', handelClikOutsideProject);
      return;
    }
    if (e.composedPath().includes(projectFormElem)) {
      return;
    }
    setProjectForm(false);
    document.removeEventListener('click', handelClikOutsideProject);
  };

  const handelProjectClick = () => {
    setProjectForm(true);
    document.addEventListener('click', handelClikOutsideProject);
  };

  useEffect(() => {
    console.log('useEffect - ', projects);
    dispatch(getByWorkspace(workspaceId));
  }, []);

  return (

    <div className="projects-wrap">

      <Header />

      <div className="projects-main-container">

        <LeftSidebar projects="active" />

        <div className="projects-content">
          <img src="https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/2018/04/How-to-Get-More-Productivity-From-a-Larger-Team-1180x664.jpg" alt="content" />
          <h3>
            Проекты в рабочей зоне -
            {' '}
            {currentWorkspace}
          </h3>
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
            <div className="project-create" onClick={handelProjectClick}>
              <ProjectItem />
            </div>
            {projectForm && <ProjectForm workspaceId={workspaceId} />}
          </div>

        </div>
      </div>

    </div>
  );
}
