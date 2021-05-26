import * as React from "react"
import "../layout.css";
import "@fontsource/pridi";
import Headline from "./components/Headline.jsx";

// styles
const pageStyles = {

}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Headline id="headline"/>
    </main>
  )
}

export default IndexPage
