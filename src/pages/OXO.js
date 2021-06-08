import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import { StaticImage } from "gatsby-plugin-image";

const OXO = () => {
  return (
    <div>
      <section id="oxo">
        <div className="purple-container" style={{marginLeft: "8%"}}>
          <div className="purple-body-container" style={{marginRight: "5%"}}>
            <h2
              id="oxo-title"
              className="title"
              style={{fontFamily: "Pridi", color: "#E5E5E5"}}
            >
              My Internship at OXO
            </h2>
            <p
              id="oxo-body"
              style={{fontFamily: "Prompt", background: "none"}}
            >
              In the summer of 2020, I worked as a full-stack Software Engineer
              Intern at a startup called
              <a id="oxo-link" href="https://joinoxo.com/"> OXO</a>,
              in San Francisco. OXO is a tech company that matches commuter
              vehicles to gig drivers. This was an amazing experience that gave me
              experience with fast-based, full-stack mobile development.
            </p>
          </div>
          <div id="oxo-image-container">
            <StaticImage
              id="oxo-image"
              src="../images/oxo2.JPG"
              alt="Margaret at OXO"
              layout="fixed"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
      <section id="oxo-accomplishments" style={{marginLeft: "8%"}}>
        <div id="oxo-accomplishments-body">
          <h3 className="subtitle" style={{fontFamily:"Pridi"}}>
            Main Accomplishments
          </h3>
          <p className="description" style={{fontFamily: "Prompt"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  )
}

export default OXO;
