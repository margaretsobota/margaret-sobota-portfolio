import React from "react";
import "@fontsource/pridi";
import "@fontsource/prompt";
import Fade from 'react-reveal/Fade';
//import Image from "./Image.jsx";

/* styles */
const projectTitle = {
  fontFamily: "Pridi",
  fontSize: "36px",
  color: "#261132",
  marginBottom: "5px"
}

const projectDesc = {
  fontFamily: "Prompt",
  fontSize: "18px",
  color: "#3E2F5B"
}

const projects = [
  {
    title: "DR Customer Journey Map",
    description: "Web app allowing Dominican Republic citizens to visualize their legal journey through a divorce proceeding.",
    repo: "https://github.com/margaretsobota/drj/tree/master",
    url: "https://drj-app-4012a.web.app/",
    img: "drj_project_map.jpg"
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
      <div>
        <h3 style={projectTitle}>
          {title}
        </h3>
        <p style={projectDesc}>
          {description}
        </p>
      </div>
      {/*<Image alt={title} filename={img} />*/}
    </div>

  );
};


const Projects = () => {
  return (
    <Fade left>
      <section id="projects">
        <h2
          id="projects-title"
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