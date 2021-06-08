import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
import Image from "./Image.jsx";

const projects = [
  {
    title: "DR Customer Journey Map",
    description: "Web app allowing Dominican Republic citizens to visualize their legal journey through a divorce proceeding.",
    repo: "https://github.com/margaretsobota/drj/tree/master",
    url: "https://drj-app-4012a.web.app/",
    img: "drj_project_map.png"
  },
  {
    title: "Chairlift",
    description: "Mobile app allowing users to create or join a carpool opportunity by integrating Firebase authentication and database.",
    repo: "https://github.com/cs394-s20/ChairLift",
    url: "",
    img: "chairlift_project.PNG"
  }
]

const Project = ({project}) => {
  const {title, description, repo, url, img} = project;
  return (
    <div className="project">
      <div className="project-text">
        <h3 className="subtitle" style={{fontFamily:"Pridi"}}>
          {title}
        </h3>
        <p className="description" style={{fontFamily: "Prompt"}}>
          {description}
        </p>
        <div className="button-container">
          <a
            target="_blank"
            className="button"
            href={repo || '#!'}
            style={{fontFamily: "Prompt"}}
          >
            Source Code
          </a>
          { url.length > 0 && (
              <a
                target="_blank"
                className="button"
                href={url || '#!'}
                style={{fontFamily: "Prompt"}}
              >
                View App
              </a>
            )
          }
        </div>
      </div>
      <div id={`${title}-image`} className="project-image">
        <Image alt={title} filename={img} />
      </div>
    </div>

  );
};


const Projects = () => {
  return (
    <Fade left>
      <section id="projects" className="section">
        <h2
          id="projects-title"
          className="title"
          style={{fontFamily: "Pridi"}}
        >
          My Work
        </h2>
        {projects.map((project) => {
          return (
            <Project project={project} />
          )
        })}
      </section>
    </Fade>
  );
};

export default Projects;
