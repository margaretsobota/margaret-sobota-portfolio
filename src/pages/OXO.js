import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import { StaticImage } from "gatsby-plugin-image";

const OXO = () => {
  return (
    <section id="oxo">
      <div className="purple-container" style={{marginLeft: "8%"}}>
        <div className="purple-body-container">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <StaticImage
          id="oxo-image"
          src="../images/oxo2.JPG"
          alt="Margaret at OXO"
          layout="fixed"
          width={400}
          height={300}
        />
      </div>
    </section>
  )
}

export default OXO;
