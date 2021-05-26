import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";

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
  padding: "10px"
}

const Headline = () => {
  return (
    <section style={{marginLeft: "15%"}}>
      <h1 style={headlineStyles}>
        Hi, I'm Margaret. I like web development.
      </h1>
      <button style={buttonStyles}> About Me </button>
    </section>
  );
};

export default Headline;
