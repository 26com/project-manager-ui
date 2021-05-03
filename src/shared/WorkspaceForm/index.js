/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.css';
import { createNew } from '../../store/entities/Workspace/thunk';

function WorkspaceForm() {
  const dispatch = useDispatch();

  const backgroundItems = [0, 1, 2, 3, 4, 5];

  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');
  const [workspaceBackground, setWorkspaceBackground] = useState(0);

  useEffect(() => {
    const activeBackground = document.querySelector(`.workspace-background-${workspaceBackground}`);
    activeBackground.classList.add('active');
  }, [workspaceBackground]);

  function handleClick() {
    dispatch(createNew({
      name: workspaceName,
      description: workspaceDescription,
      background: workspaceBackground,
    }));
  }

  function handelBackgroundChoice(i) {
    const className = `.workspace-background-${workspaceBackground}`;
    const activeBackground = document.querySelector(className);
    activeBackground.classList.remove('active');
    setWorkspaceBackground(i);
  }

  return (
    <div className="workspace-form-container">
      <form className="workspace-form">
        <h4>
          Добавить рабочую зону
        </h4>
        <input
          id="workspace-name"
          type="text"
          placeholder="Название рабочей зоны"
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
        <textarea
          id="workspace-description"
          rows="6"
          placeholder="Описание рабочей зоны"
          onChange={(e) => setWorkspaceDescription(e.target.value)}
        />
        <div className="workspace-background-search">
          {
            backgroundItems.map((i) => {
              const className = `workspace-background-${i}`;
              return (
                <div
                  key={i}
                  className={className}
                  onClick={() => handelBackgroundChoice(i)}
                />
              );
            })
          }
        </div>
        <button
          onClick={handleClick}
          disabled={!workspaceName}
        >
          Создать
        </button>
      </form>
      <div className="workspace-form-right-zone" />
    </div>
  );
}

export default WorkspaceForm;
