import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';

const titleStyles = {
  fontFamily: "Pridi",
  fontSize: "72px",
  color: "#E5E5E5",
  marginTop: "20%"
}

const About = () => {
  return (
    <Fade left>
      <section id="about">
        <div id="about-container" style={{marginLeft: "15%"}}>
          <h1
            id="about-title"
            style={titleStyles}
          >
            A Little About Me...
          </h1>
          <p id="about-body" style={{fontFamily: "Prompt"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </Fade>
  );
};

export default About;
