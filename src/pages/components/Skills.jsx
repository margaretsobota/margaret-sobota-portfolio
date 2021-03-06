import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import skillsImage from "../../images/skills.svg";

const Skills = () => {
  return (
    <Fade right>
      <section id="skills">
        <h2
          id="skills-title"
          className="title"
          style={{fontFamily: "Pridi"}}
        >
          Skills
        </h2>
        <img
          id="skills-image"
          src={skillsImage}
          alt="Margaret's skills"
        />
      </section>
    </Fade>
  );
};

export default Skills;
