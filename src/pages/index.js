import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    commodi earum possimus, odit laboriosam voluptatibus numquam labore quod,
    culpa optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
    blanditiis dignissimos repellendus dolorum est quos placeat officiis eos.
    Ullam, consequatur inventore velit consectetur excepturi incidunt ipsum
    quaerat eius dolorem, placeat dolore?
  </Layout>
)

export default IndexPage
