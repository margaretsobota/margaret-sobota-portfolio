import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import SkillsImage from "../../images/skills.svg";

const Skills = () => {
  return (
    <Fade right>
      <section id="skills">
        <h2
          id="skills-title"
          style={{fontFamily: "Pridi"}}
        >
          Skills
        </h2>
      </section>
    </Fade>
  );
};

export default Skills;
