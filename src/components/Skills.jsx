import React, { memo } from 'react';
import '../styles/Skills.css';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';

function Skills() {
  return (
    <section className="skill-section">
      <h1 className="skill-heading">My Skills</h1>
      <div className="skill-container">
        {skillsData.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
}

export default memo(Skills);
