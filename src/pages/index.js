import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import Headline from "./components/Headline.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Headline/>
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default IndexPage
