import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import { Link } from 'react-scroll';

const headlineStyles = {
  fontFamily: "Pridi",
  fontSize: "72px",
  color: "#3E2F5B",
  marginTop: "25%",
}
const buttonStyles = {
  fontFamily: "Prompt",
  fontSize: "36px",
  border: "5px solid #3E2F5B",
  padding: "10px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
}

const Headline = () => {
  return (
    <section id="headline" style={{marginLeft: "15%"}}>
      <div id="menu" style={{fontFamily: "Prompt"}}>
        <Link
          className="menu-link"
          to="skills"
          smooth
          duration={1000}
        >
          skills;
        </Link>
        <Link
          className="menu-link"
          to="projects"
          smooth
          duration={1000}
        >
          projects;
        </Link>
        <Link
          className="menu-link"
          to="blogs"
          smooth
          duration={1000}
        >
          experience;
        </Link>
      </div>
      <h1 style={headlineStyles}>
        Hi, I'm Margaret. I like web development.
      </h1>
      <Link
        id="about-link"
        to="about"
        style={buttonStyles}
        smooth
        duration={1000}
      >
        About Me
      </Link>
    </section>
  );
};

export default Headline;
