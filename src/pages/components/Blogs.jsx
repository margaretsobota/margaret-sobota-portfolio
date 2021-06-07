import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import Image from "./Image.jsx";
import { Link } from "gatsby";

/* styles */
const blogTitle = {
  fontFamily: "Pridi",
  fontSize: "36px",
  color: "#261132",
  marginBottom: "5px"
}

const blogDesc = {
  fontFamily: "Prompt",
  fontSize: "18px",
  color: "#3E2F5B"
}

const OXOBlog = () => {
  return (
    <div className="blog">
      <div className="blog-text">
        <div id="OXO-image" className="blog-image">
          <Image alt="Margaret at OXO" filename="oxo3.JPG" />
        </div>
        <h3 style={blogTitle}>
          Interning at OXO
        </h3>
        <p style={blogDesc}>
          Read about my experience working as a full-stack software engineer
          intern at OXO, a startup in San Francisco.
        </p>
        <div className="blog-button-container">
          <Link
            className="blog-button"
            to="/OXO"
            style={{fontFamily: "Prompt"}}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>

  );
};


const Blogs = () => {
  return (
    <Fade right>
      <section id="blogs">
        <h2
          id="blogs-title"
          style={{fontFamily: "Pridi"}}
        >
          My Experiences
        </h2>
        <OXOBlog />
      </section>
    </Fade>
  );
};

export default Blogs;
