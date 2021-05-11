/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { React, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ProjectItem({
  name, background, id,
}) {
  const className = `project-item workspace-background-${background}`;

  return (
    <div className={className}>
      <span>{name}</span>
    </div>
  );
}

ProjectItem.propTypes = {
  name: PropTypes.string,
  background: PropTypes.number,
  id: PropTypes.number,
};

ProjectItem.defaultProps = {
  name: 'Создать',
  background: 0,
  id: undefined,
};

export default ProjectItem;
