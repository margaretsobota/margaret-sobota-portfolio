import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import Headline from "./components/Headline.jsx";
import About from "./components/About.jsx";

// styles
const pageStyles = {

}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Headline/>
      <About />
    </main>
  )
}

export default IndexPage
