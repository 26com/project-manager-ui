import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import WorkspaceForm from '../WorkspaceForm';
import WorkspaceItem from '../WorkspaceItem';
import { getByUser, createNew } from '../../store/entities/Workspace/thunk';

import './style.css';

function LeftSidebar({ home, projects, templates }) {
  const [workspaceForm, setWorkspaceForm] = useState(false);
  const { workspaces } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();

  const handelClikOutsideWorkspace = (e) => {
    const workspaceCreateElem = document.querySelector('.workspace-create-button');
    const workspaceShowElem = document.querySelector('.left-sidebar-workspace-button');
    const workspaceFormElem = document.querySelector('.workspace-form-container');
    if (e.composedPath().includes(workspaceShowElem)) {
      return;
    }
    if (e.composedPath().includes(workspaceCreateElem)) {
      setWorkspaceForm(false);
      document.removeEventListener('click', handelClikOutsideWorkspace);
      return;
    }
    if (e.composedPath().includes(workspaceFormElem)) {
      return;
    }
    setWorkspaceForm(false);
    document.removeEventListener('click', handelClikOutsideWorkspace);
  };

  const handelWorkspaceClick = () => {
    document.addEventListener('click', handelClikOutsideWorkspace);
    setWorkspaceForm(true);
  };

  useEffect(() => {
    dispatch(getByUser());
  }, []);

  return (
    <div className="left-sidebar-wrap">
      <nav className="left-sidebar-container">
        <a href="/" className={home}>
          <i className="fas fa-home" />
          {'  '}
          Главная
        </a>
        <a href="/user/projects" className={projects}>
          <i className="fas fa-chalkboard-teacher" />
          {'  '}
          Проекты
        </a>
        <a href="/" className={templates}>
          <i className="fab fa-buromobelexperte" />
          {'  '}
          Шаблоны
        </a>
        <div className="left-sidebar-workspace">
          <span>Рабочие зоны</span>
          {'  '}
          <button className="left-sidebar-workspace-button" onClick={handelWorkspaceClick}>
            <i className="fas fa-plus" />
          </button>
        </div>
      </nav>
      {workspaceForm
        && <WorkspaceForm />}
      <div className="left-sidebar-workspace-list">
        {
          workspaces.map((workspace) => (
            <WorkspaceItem
              key={workspace.id}
              name={workspace.name}
              description={workspace.description}
              background={workspace.background}
              id={workspace.id}
            />
          ))
        }
      </div>
    </div>
  );
}

LeftSidebar.propTypes = {
  home: PropTypes.string,
  templates: PropTypes.string,
  projects: PropTypes.string,
};

LeftSidebar.defaultProps = {
  home: 'left-sidebar-item',
  templates: 'left-sidebar-item',
  projects: 'left-sidebar-item',
};

export default LeftSidebar;
