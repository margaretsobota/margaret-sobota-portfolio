import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import Headline from "./components/Headline.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Headline/>
      <About />
      <Skills />
    </main>
  )
}

export default IndexPage
