/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import { createNew } from '../../store/entities/Project/thunk';

function ProjectForm({ workspaceId }) {
  const dispatch = useDispatch();

  const backgroundItems = [0, 1, 2, 3, 4, 5];

  const [projectName, setProjectName] = useState('');
  const [projectBackground, setProjectBackground] = useState(0);

  useEffect(() => {
    const activeBackground = document.querySelector(`.project-background-${projectBackground}`);
    activeBackground.classList.add('active');
  }, [projectBackground]);

  function handleClick() {
    dispatch(createNew({
      name: projectName,
      background: projectBackground,
      workspaceId,
    }));
  }

  function handelBackgroundChoice(i) {
    const className = `.project-background-${projectBackground}`;
    const activeBackground = document.querySelector(className);
    activeBackground.classList.remove('active');
    setProjectBackground(i);
  }

  return (
    <div className="project-form-container">
      <div className="project-form">
        <h4>
          Добавить рабочую зону
        </h4>
        <input
          id="project-name"
          type="text"
          placeholder="Название рабочей зоны"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button
          className="project-create-button"
          onClick={handleClick}
          disabled={!projectName}
        >
          Создать
        </button>
      </div>
      <div className="project-form-right-zone">
        <div className="project-background-search">
          {
            backgroundItems.map((i) => {
              const className = `project-background-${i}`;
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
      </div>
    </div>
  );
}

ProjectForm.propTypes = {
  workspaceId: PropTypes.string,
};

ProjectForm.defaultProps = {
  workspaceId: '',
};

export default ProjectForm;
