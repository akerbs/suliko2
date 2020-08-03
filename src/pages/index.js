import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bgImgs from "../images/bgImgs.gif"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import Img from "gatsby-image"
import BackgroundSlider from "gatsby-image-background-slider"
import { AutoRotatingCarousel } from "material-auto-rotating-carousel"
import { Slide } from "material-auto-rotating-carousel"
import BackgroundImage from "gatsby-background-image"
import { makeStyles } from "@material-ui/core/styles"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import LangSwAkk from "../components/langSwAkk"
// import bgImgs from "../components/bgImgs"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
  // bgImg: {
  //   width: " 100%",
  //   height: "100vh",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // },
  // blackOverlay: {
  //   display: "flex",
  //   height: "100%",
  //   alignItems: "center",
  //   color: "white",
  //   background:
  //     "radial-gradient(circle, rgba(255,255,255,0) 19%, rgba(0,0,0,0.9192051820728291) 68%)",
  //   [theme.breakpoints.down("xs")]: {
  //     background:
  //       "radial-gradient(circle, rgba(255,255,255,0) 32%, rgba(0,0,0,0.773546918767507) 67%)",
  //   },
  // },
  // bgTextWrapper: {
  //   maxWidth: "700px",
  //   margin: "0 auto",
  //   textAlign: "center",
  // },
  first: {
    backgroundImage: `url(${bgImgs})`,

    width: " 100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // display: "block",

    // animation: "$bgImgs 5s ease-in-out infinite alternate ",
  },
  text1: {},
  // "@keyframes bgImgs": {
  //   "0%, 50%": {
  //     backgroundImage: `url(${img1})`,
  //   },
  //   "50.01%, 100%": {
  //     backgroundImage: `url(${img2})`,
  //   },
  // },
  // second: {
  //   display: "flex",
  //   height: "100%",
  //   // alignItems: "center",
  //   color: "white",
  //   background:
  //     "radial-gradient(circle, rgba(255,255,255,0) 27%, rgba(0,0,0,0.9192051820728291) 80%)",
  //   [theme.breakpoints.down("xs")]: {
  //     background:
  //       "radial-gradient(circle, rgba(255,255,255,0) 52%, rgba(0,0,0,0.9192051820728291) 95%)",
  //   },
  // },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />

      {/* <div className={classes.first}></div> */}
      <img src={bgImgs} />

      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
      {/* <BackgroundSlider
        query={useStaticQuery(bgQuery)}
        images={["1.jpg", "2.jpg"]}
      ></BackgroundSlider> */}
      {/* <Carousel prevIcon={false} nextIcon={false}>
        <Carousel.Item>
          <Img
            fluid={props.data.img1.childImageSharp.fluid}
            alt="Georgian food"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            fluid={props.data.img2.childImageSharp.fluid}
            alt="Georgian food"
          />
        </Carousel.Item>
      </Carousel> */}
      {/* <BackgroundImage
        className={classes.bgImg}
        fluid={props.data.img2.childImageSharp.fluid}
        // fadeIn
      >
        <div className={classes.blackOverlay}>
          <div className={classes.bgTextWrapper}>
            <p>Text should be here</p>
          </div>
        </div>
      </BackgroundImage> */}
      {/* <Img fluid={props.data.img1.childImageSharp.fluid} alt="Georgian food" /> */}
      {/* <Img fluid={props.data.img2.childImageSharp.fluid} alt="Georgian food" /> */}
      {/* <img src={bgImg1600} alt="food" style={{}}/> */}

      <div className={classes.text1}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        commodi earum possimus, odit laboriosam voluptatibus numquam labore
        quod, culpa optio exercitationem sint eveniet maxime quam amet
        voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
        placeat officiis eos. Ullam, consequatur inventore velit consectetur
        excepturi incidunt ipsum quaerat eius dolorem, placeat dolore? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Praesentium commodi
        earum possimus, odit laboriosam voluptatibus numquam labore quod, culpa
        optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
        blanditiis dignissimos repellendus dolorum est quos placeat officiis
        eos. Ullam, consequatur inventore velit consectetur excepturi incidunt
        ipsum quaerat eius dolorem, placeat dolore? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Praesentium commodi earum possimus, odit
        laboriosam voluptatibus numquam labore quod, culpa optio exercitationem
        sint eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
        voluptatibus numquam labore quod, culpa optio exercitationem sint
        eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
        voluptatibus numquam labore quod, culpa optio exercitationem sint
        eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
        voluptatibus numquam labore quod, culpa optio exercitationem sint
        eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
        voluptatibus numquam labore quod, culpa optio exercitationem sint
        eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Praesentium commodi earum possimus, odit laboriosam
        voluptatibus numquam labore quod, culpa optio exercitationem sint
        eveniet maxime quam amet voluptates nesciunt blanditiis dignissimos
        repellendus dolorum est quos placeat officiis eos. Ullam, consequatur
        inventore velit consectetur excepturi incidunt ipsum quaerat eius
        dolorem, placeat dolore?
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// export const bgQuery = graphql`
//   query {
//     backgrounds: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//       nodes {
//         relativePath
//         childImageSharp {
//           fluid(maxWidth: 2000, quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// query MyQuery {
//   file(relativePath: {eq: "images"}) {
//     childImageSharp {
//       fluid(maxWidth: 2000) {
//        ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }

// query MyQuery {
//   allFile(filter: {sourceInstanceName: {eq: "images"}}) {
//     nodes {
//       relativePath
//       childImageSharp {
//                 fluid (maxWidth: 4000, quality: 100){
//                  ...GatsbyImageSharpFluid
//                 }
//               }
//     }
//   }
// }
