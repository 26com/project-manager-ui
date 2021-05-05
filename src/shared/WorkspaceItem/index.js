/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteOne, getByUser } from '../../store/entities/Workspace/thunk';

import './style.css';

function WorkspaceItem({
  name, description, background, id,
}) {
  const dispatch = useDispatch();
  const className = `workspace-item-lable workspace-background-${background}`;
  const [workspaceItemMenu, setWorkspaceItemMenu] = useState(false);

  function handleClickDelete() {
    dispatch(deleteOne(id));
    dispatch(getByUser());
  }

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
        <span onClick={handleClickDelete}>
          <i className="fas fa-trash" />
          {' '}
          Удалить
        </span>
        {' '}
        <span>
          <i className="far fa-folder-open" />
          {' '}
          Проекты
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
  id: PropTypes.number,
};

WorkspaceItem.defaultProps = {
  name: 'Рабочая зона',
  description: 'описание рабочей зоны',
  background: 0,
  id: undefined,
};

export default WorkspaceItem;
