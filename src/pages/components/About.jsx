import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Fade left>
      <section id="about">
        <div className="purple-container" style={{marginLeft: "15%"}}>
          <div className="purple-body-container">
            <h2
              id="about-title"
              className="title"
              style={{fontFamily: "Pridi", color: "#E5E5E5"}}
            >
              A Little About Me...
            </h2>
            <p
              id="about-body"
              style={{fontFamily: "Prompt", background: "none"}}
            >
              I am a senior at Northwestern University studying
              computer science. My specialization in computer science is
              web development – both mobile and web-based. Though I mainly
              focuses on frontend web development, I spent six months through
              the summer and fall of 2020 working as a full-stack Software
              Engineer Intern at a startup called OXO in San Francisco. At this
              company, I worked end-to-end on many crucial projects for the
              company's cross-platform mobile app, including a project to
              obtain a stream of vehicle data from hardware devices to display
              in real time in the frontend application. I will further my
              web development skills as a Software Engineer Intern at LinkedIn
              in the summer of 2021. In my spare time, I enjoy painting
              portraits and hiking.
            </p>
          </div>
          <StaticImage
            id="about-image"
            src="../../images/profile.JPG"
            alt="Margaret's portrait"
            layout="fixed"
            width={263}
            height={394}
          />
        </div>
      </section>
    </Fade>
  );
};

export default About;
