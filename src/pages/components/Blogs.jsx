import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import Image from "./Image.jsx";
import { Link } from "gatsby";

const OXOBlog = () => {
  return (
    <div className="blog">
      <div id="OXO-image" className="blog-image">
        <Image alt="Margaret at OXO" filename="oxo3.JPG" />
      </div>
      <h3 className="subtitle" style={{fontFamily:"Pridi"}}>
        Interning at OXO
      </h3>
      <p className="description" style={{fontFamily: "Prompt"}}>
        Read about my experience working as a full-stack Software Engineer
        Intern at OXO, a startup in San Francisco.
      </p>
      <div className="button-container" id="blog-button-container">
        <Link
          id="blog-button"
          className="button"
          to="/OXO"
          style={{fontFamily: "Prompt"}}
        >
          Read More
        </Link>
      </div>
    </div>

  );
};


const Blogs = () => {
  return (
    <Fade right>
      <section id="blogs" className="section">
        <h2
          id="blogs-title"
          className="title"
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
