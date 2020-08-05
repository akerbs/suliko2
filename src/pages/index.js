import React, { useRef, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bgImgs from "../images/bgImgs.gif"
import bgImgsV from "../images/bgImgsV.gif"
import imgs1ov from "../images/imgs1ov.webp"
import imgs1ovV from "../images/imgs1ovV.webp"
import { makeStyles } from "@material-ui/core/styles"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import sloganImg2 from "../images/slogan_eng2.png"
import Container from "@material-ui/core/Container"

import Header from "../components/header"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },

  // text1: {
  //   width: "70%",
  //   margin: "0 auto",
  // },
  // imgFirst: {
  //   width: " 100%",
  //   height: "auto",
  //   [theme.breakpoints.down("xs")]: {},
  // },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />

      {/* <Hidden smUp>
        <picture>
          <source
            srcset={imgs1ovV}
            type="image/webp"
            className={classes.imgFirst}
          />
          <img src={bgImgsV} alt="georgian food" className={classes.imgFirst} />
        </picture>
      </Hidden>

      <Hidden xsDown>
        <picture>
          <source
            srcset={imgs1ov}
            type="image/webp"
            className={classes.imgFirst}
          />
          <img src={bgImgs} alt="georgian food" className={classes.imgFirst} />
        </picture>
      </Hidden> */}
      <picture style={{ width: "100vw", height: "auto" }}>
        <source
          media="(max-width: 599px)"
          srcset={imgs1ovV}
          type="image/webp"
          style={{ width: "100vw", height: "auto" }}
        />
        <source
          media="(min-width: 600px)"
          srcset={imgs1ov}
          type="image/webp"
          style={{ width: "100vw", height: "auto" }}
        />
        <source
          media="(min-width: 600px)"
          srcset={bgImgs}
          style={{ width: "100vw", height: "auto" }}
        />

        <img
          src={bgImgsV}
          alt="georgian food"
          style={{ width: "100vw", height: "auto" }}
        />
      </picture>

      <p>
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
        adipisicing elit.Praesentium commodi earum possimus, odit laboriosam
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
      </p>
      <img
        data-sal="flip-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        src={sloganImg2}
        alt="slogan"
        style={{
          display: "block",
          zIndex: 999,
        }}
      />
    </Layout>
  )
}
export default IndexPage
// IndexPage.propTypes = {
//   width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
// }
// export default withWidth()(IndexPage)

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
