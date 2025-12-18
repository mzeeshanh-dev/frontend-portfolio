import React, { memo } from "react";
import "../styles/ProjectBox.css";

const ProjectBox = memo(function ProjectBox({ image, skills = [], title, description, link, codeLink }) {
  return (
    <div className="container">
      <div className="upper">
        {/* The zoom trigger is now scoped to this div only */}
        <div className="img-wrapper">
          <img
            src={image}
            alt={title || "Project"}
            className="project-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {skills?.length > 0 && (
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="lang" key={`${title}-skill-${index}`}>
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lower">
        {title && <div className="project-title">{title}</div>}
        {description && <div className="project-description">{description}</div>}

        <div className="button-group">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btnLive">
              <button><i className='bx bx-show'></i> Live Demo</button>
            </a>
          )}
          <a href={codeLink || "#"} target="_blank" rel="noopener noreferrer" className="btnCode">
            <button><i className='bx bx-code-alt'></i> Code</button>
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProjectBox;