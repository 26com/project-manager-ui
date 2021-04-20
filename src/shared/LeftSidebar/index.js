import { React } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function LeftSidebar({ home, boarders, templates }) {
  return (
    <nav className="left-sidebar-container">
      <a href="/" className={home}>
        <i className="fas fa-home" />
        {'  '}
        Главная
      </a>
      <a href="/" className={boarders}>
        <i className="fas fa-chalkboard-teacher" />
        {'  '}
        Доски
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
  boarders: PropTypes.string,
};

LeftSidebar.defaultProps = {
  home: 'left-sidebar-item',
  templates: 'left-sidebar-item',
  boarders: 'left-sidebar-item',
};

export default LeftSidebar;
