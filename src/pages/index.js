import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import bgImg1600 from "../images/bgImg1600.gif"
// import img1 from "../images/1.jpg"
// import img2 from "../images/2.jpg"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"
import { AutoRotatingCarousel } from "material-auto-rotating-carousel"
import { Slide } from "material-auto-rotating-carousel"
import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <img src={bgImg1600} alt="food" style={{}}/> */}
    <BackgroundImage
      style={{
        width: " 100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      fluid={data.img2.childImageSharp.fluid}
      // fadeIn
    >
      <div
        style={{
          display: "flex",
          // backgroundColor: "rgba(0,0,0,.5)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8743872549019608) 100%)",
          height: "100%",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          <p>Text should be here</p>
        </div>
      </div>
    </BackgroundImage>
    {/* <Img fluid={data.img1.childImageSharp.fluid} alt="Georgian food" /> */}
    {/* <Img fluid={data.img2.childImageSharp.fluid} alt="Georgian food" /> */}
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    commodi earum possimus, odit laboriosam voluptatibus numquam labore quod,
    culpa optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
    blanditiis dignissimos repellendus dolorum est quos placeat officiis eos.
    Ullam, consequatur inventore velit consectetur excepturi incidunt ipsum
    quaerat eius dolorem, placeat dolore? Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Praesentium commodi earum possimus, odit
    laboriosam voluptatibus numquam labore quod, culpa optio exercitationem sint
    eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
    repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
    inventore velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
    placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Praesentium commodi earum possimus, odit laboriosam voluptatibus numquam
    labore quod, culpa optio exercitationem sint eveniet maxime quam amet
    voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
    placeat officiis eos. Ullam, consequatur inventore velit consectetur
    excepturi incidunt ipsum quaerat eius dolorem, placeat dolore? Lorem ipsum
    dolor, sit amet consectetur adipisicing elit. Praesentium commodi earum
    possimus, odit laboriosam voluptatibus numquam labore quod, culpa optio
    exercitationem sint eveniet maxime quam amet voluptates nesciunt blanditiis
    dignissimos repellendus dolorum est quos placeat officiis eos. Ullam,
    consequatur inventore velit consectetur excepturi incidunt ipsum quaerat
    eius dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
    voluptatibus numquam labore quod, culpa optio exercitationem sint eveniet
    maxime quam amet voluptates nesciunt blanditiis dignissimos repellendus
    dolorum est quos placeat officiis eos. Ullam, consequatur inventore velit
    consectetur excepturi incidunt ipsum quaerat eius dolorem, placeat dolore?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    commodi earum possimus, odit laboriosam voluptatibus numquam labore quod,
    culpa optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
    blanditiis dignissimos repellendus dolorum est quos placeat officiis eos.
    Ullam, consequatur inventore velit consectetur excepturi incidunt ipsum
    quaerat eius dolorem, placeat dolore? Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Praesentium commodi earum possimus, odit
    laboriosam voluptatibus numquam labore quod, culpa optio exercitationem sint
    eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
    repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
    inventore velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
    placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Praesentium commodi earum possimus, odit laboriosam voluptatibus numquam
    labore quod, culpa optio exercitationem sint eveniet maxime quam amet
    voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
    placeat officiis eos. Ullam, consequatur inventore velit consectetur
    excepturi incidunt ipsum quaerat eius dolorem, placeat dolore?
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
