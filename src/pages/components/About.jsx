import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";

const titleStyles = {
  fontFamily: "Pridi",
  fontSize: "72px",
  color: "#3E2F5B",
  marginTop: "20%",
}

const About = () => {
  return (
    <section id="about" style={{marginTop: "300px", marginLeft: "15%"}}>
      <h1 style={titleStyles}> A Little About Me... </h1>
    </section>
  );
};

export default About;
