import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import { Link } from 'react-scroll';

const headlineStyles = {
  fontFamily: "Pridi",
  fontSize: "72px",
  color: "#3E2F5B",
  marginTop: "20%",
}
const buttonStyles = {
  fontFamily: "Prompt",
  fontSize: "36px",
  color: "#3E2F5B",
  border: "5px solid #3E2F5B",
  padding: "10px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
}

const Headline = () => {
  return (
    <section id="headline" style={{marginLeft: "15%"}}>
      <h1 style={headlineStyles}>
        Hi, I'm Margaret. I like web development.
      </h1>
      <Link to="about" style={buttonStyles}> About Me </Link>
    </section>
  );
};

export default Headline;
