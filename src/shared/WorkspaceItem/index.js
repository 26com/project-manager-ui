/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { React, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function WorkspaceItem({ name, description, background }) {
  const className = `workspace-item-lable workspace-background-${background}`;
  const [workspaceItemMenu, setWorkspaceItemMenu] = useState(false);
  return (
    <div className="workspace-item-container">
      <div className={className}>{name[0]}</div>
      <span>
        {name}
        {' '}
      </span>
      {!workspaceItemMenu && (<i className="fas fa-caret-down menu-button" onClick={() => setWorkspaceItemMenu(true)} />)}
      {workspaceItemMenu && (<i className="fas fa-caret-up menu-button" onClick={() => setWorkspaceItemMenu(false)} />)}
      {workspaceItemMenu
      && (
      <div className="workspace-item-menu">
        <h5>
          {description}
        </h5>
        <span>
          <i className="fas fa-trash" />
          {' '}
          Удалить
        </span>
        {' '}
        <span>
          <i className="far fa-folder-open" />
          {' '}
          Открыть
        </span>
      </div>
      )}
    </div>
  );
}

WorkspaceItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.number,
};

WorkspaceItem.defaultProps = {
  name: 'Рабочая зона',
  description: 'описание рабочей зоны',
  background: 0,
};

export default WorkspaceItem;
