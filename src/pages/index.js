import React, { useRef, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bgImgs from "../images/bgImgs.gif"
import bgImgsV from "../images/bgImgsV.gif"
import bgImgsWP from "../images/bgImgs.webp"
import bgImgsVWP from "../images/bgImgsV.webp"
import overlay from "../images/overlay.png"
import overlayV from "../images/overlayV.png"
import { makeStyles } from "@material-ui/core/styles"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"

import Header from "../components/header"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },

  text1: {
    width: "70%",
    margin: "0 auto",
  },
  imgFirst: {
    zIndex: -999,
    width: " 100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImgsWP})`,
  
  },
   imgFirstV: {
      zIndex: -999,
    width: " 100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImgsVWP})`,
  
  },
  overlay : {
     zIndex: -99,
  display: "flex",
    height: "100%",
    alignItems: "center",
    color: "white",
    background:
      "radial-gradient(circle, rgba(255,255,255,0) 69%, rgba(0,0,0,0.9192051820728291) 80%)",
    [theme.breakpoints.down("xs")]: {
      background:
        "radial-gradient(circle, rgba(255,255,255,0) 32%, rgba(0,0,0,0.773546918767507) 67%)",
    },
  },
  bgimgsWP: {
    width: "100%",
    height: "auto",
  }
}))

const IndexPage = props => {
  // const inputRef = useRef()
  // console.log("TEST!")
  // console.log(inputRef)
  const classes = useStyles()

  // const bgImgPosBb = () => {
  //   return inputRef.current.getBoundingClientRect().bottom
  // }

  // const scrollHandler = _ => {
  //   const level = inputRef.current.getBoundingClientRect().bottom
  //   return level
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true)
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true)
  //   }
  // }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {/* <div className={classes.first}></div> */}
      <Hidden smUp>
     
       
          <div  className={classes.imgFirstV}>  <div className={classes.overlay} /></div>
     
      </Hidden>
      <Hidden xsDown>
     
        <div  className={classes.imgFirst}>  <div className={classes.overlay} /></div>
     
      </Hidden>

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

IndexPage.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(IndexPage)

// export const query = graphql`
//   query {
//     img1: file(relativePath: { eq: "1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 4000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     img2: file(relativePath: { eq: "2.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 4000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
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
