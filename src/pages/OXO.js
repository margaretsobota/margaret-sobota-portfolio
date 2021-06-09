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
              experience with fast-paced, full-stack mobile development. The
              internship was initially supposed to last only three months, but
              my offer was extended to six months to help the company through a
              period of rapid growth.
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
      <section id="oxo-skills" style={{marginLeft: "8%"}}>
        <div id="oxo-skills-body">
          <h3 className="subtitle" style={{fontFamily:"Pridi"}}>
            Skills Acquired
          </h3>
          <p className="description" style={{fontFamily: "Prompt"}}>
            Over my time at OXO, I learned how to navigate a large monorepo
            codebase built in React Native and TypeScript. In terms of the
            backend, I learned to navigate systems such as a Sequelize Database,
            Heroku web server, and Feathers API endpoints. In terms of the
            frontend, I learned Typescript-based React Native and how to serve
            the mobile app locally via Expo.
            <br/>
            <br/>
            Over the course of the internship, I worked on everything from small
            debugging tasks to full-stack, end-to-end projects. Later in the
            internship, I learned how to create designs via Figma and began
            completing both the design and code deliverables of my projects.
            Through this experience, I learned how to project-manage,
            communicate effectively with my team, and how to pair program when
            needed to work through roadblocks.
          </p>
        </div>
        <div id="logo-container">
          <StaticImage
            className="tech-logo"
            src="../images/react.svg"
            alt="React logo"
            layout="fixed"
            height={75}
          />
          <StaticImage
            className="tech-logo"
            src="../images/typescript-icon.svg"
            alt="TypeScript logo"
            layout="fixed"
            height={75}
          />
          <StaticImage
            className="tech-logo"
            src="../images/figma.svg"
            alt="Figma logo"
            layout="fixed"
            height={75}
          />
        </div>
      </section>
    </div>
  )
}

export default OXO;
