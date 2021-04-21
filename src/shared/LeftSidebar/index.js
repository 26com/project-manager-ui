import { React } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function LeftSidebar({ home, projects, templates }) {
  return (
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
    </nav>
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
