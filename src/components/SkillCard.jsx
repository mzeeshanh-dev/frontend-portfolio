import React, { useMemo } from 'react';
import '../styles/SkillCard.css';

const SkillCard = React.memo(
  function SkillCard({ leftIcon, role, skills = [], columns = 3 }) {
    const gridStyle = useMemo(
      () => ({ gridTemplateColumns: `repeat(${columns}, 1fr)` }),
      [columns]
    );

    return (
      <div className="skill-card-container">
        <div className="top">
          <div className="skill-icon-background">
            <img src={leftIcon} alt={`${role} icon`} loading="lazy" />
          </div>
          <p className="title">{role}</p>
        </div>

        <div className="bottom" style={gridStyle}>
          {skills.map((skill, index) => (
            <div className="skill-box" key={skill.id || index}>
              <img
                src={skill.icon}
                className={`box-img ${skill.id === 'next' ? 'next-icon' : ''}`}
                alt={skill.text}
                loading="lazy"
              />
              <p className="box-title">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.leftIcon === nextProps.leftIcon &&
      prevProps.role === nextProps.role &&
      prevProps.columns === nextProps.columns &&
      prevProps.skills.length === nextProps.skills.length &&
      prevProps.skills.every((s, i) => s.icon === nextProps.skills[i].icon)
    );
  }
);

export default SkillCard;
