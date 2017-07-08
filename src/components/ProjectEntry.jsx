import React from 'react';

const ProjectEntry = (props) => {
  return (
    <div className="project">
      <div className="projectName">
        {props.name}
      </div>
    </div>
  );
};

export default ProjectEntry;
