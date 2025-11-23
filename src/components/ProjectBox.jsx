import React, { memo } from "react";
import "../styles/ProjectBox.css";

const ProjectBox = memo(function ProjectBox({ image, skills = [], title, description, link }) {
  return (
    <div className="container">
      <div className="upper">
        <img
          src={image}
          alt={title || "Project"}
          className="project-img"
          loading="lazy"
          decoding="async"
        />

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

        {link && (
          <div className="btnLive">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button>View Live</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

export default ProjectBox;
