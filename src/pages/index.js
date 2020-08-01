import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import bgImg1600 from "../images/bgImg1600.gif"
// import img1 from "../images/1.jpg"
// import img2 from "../images/2.jpg"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <img src={bgImg1600} alt="food" style={{}}/> */}
    <Img fluid={data.img1.childImageSharp.fluid} alt="Georgian food" />
    <Img fluid={data.img2.childImageSharp.fluid} alt="Georgian food" />
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    commodi earum possimus, odit laboriosam voluptatibus numquam labore quod,
    culpa optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
    blanditiis dignissimos repellendus dolorum est quos placeat officiis eos.
    Ullam, consequatur inventore velit consectetur excepturi incidunt ipsum
    quaerat eius dolorem, placeat dolore?
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
