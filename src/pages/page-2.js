import React from "react"
import { Link } from "gatsby"
import bgImgs from "../images/bgImgs.gif"
import bgImgsV from "../images/bgImgsV.gif"
import imgs1ov from "../images/imgs1ov.webp"
import imgs1ovV from "../images/imgs1ovV.webp"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sloganImg2 from "../images/slogan_eng2.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },

  text1: {
    width: "70%",
    margin: "0 auto",
  },
  imgFirst: {
    width: " 100%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {},
  },
}))

const SecondPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Page two" />

      <picture>
        <source
          media="(max-width: 599px)"
          srcset={imgs1ovV}
          type="image/webp"
          className={classes.imgFirst}
        />
        <source
          media="(min-width: 600px)"
          srcset={imgs1ov}
          type="image/webp"
          className={classes.imgFirst}
        />
        <source
          media="(min-width: 600px)"
          srcset={bgImgs}
          className={classes.imgFirst}
        />

        <img src={bgImgsV} alt="georgian food" className={classes.imgFirst} />
      </picture>
      {/* </Hidden> */}
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>

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
        ipsum quaerat eius dolore excepturi incidunt ipsum quaerat eius dolorem,
        placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
        numquam labore quod, culpa optio exercitationem sint eveniet maxime quam
        amet voluptates nesciunt blanditiis dignissimos repellendus dolorum est
        quos placeat officiis eos. U excepturi incidunt ipsum quaerat eius
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
        adipisicing elit. excepturi incidunt ipsum quaerat eius dolorem, placeat
        dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Praesentium commodi earum possimus, odit laboriosam voluptatibus numquam
        labore quod, culpa optio exercitationem sint eveniet maxime quam amet
        voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
        placeat officiis eos. Ullam, consequatur inventore velit consectetur
        excepturi incidunt ipsum quaerat eius dolorem, placeat dolore? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Praesentium commodi
        earum possimus, odit laboriosam voluptatibus numquam labore quod, culpa
        optio exercitationem sint eveniet maxime quam amet voluptates nesciunt
        blanditiis dignissimos repellendus dolorum est quos placeat officiis
        eos. Ullam, consequatur inventore velit consectetur excepturi incidunt
        ipsum quaerat eius dolorem, placeat dolore? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit.llam, consequatur inventore velit
        consectetur excepturi incidunt ipsum quaerat eius dolorem, placeat
        dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Praesentium commodi earum possimus, odit laboriosam voluptatibus numquam
        labore quod, culpa optio exercitationem sint eveniet maxime quam amet
        voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
        placeat officiis eos. Ullam, consequatur inventore velit consectetur
        excepturi incidunt ipsum quaerat eius dolorem, placeat dolore? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit.m, placeat dolore?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        commodi earum possimus, odit laboriosam voluptatibus numquam labore
        quod, culpa optio exercitationem sint eveniet maxime quam amet
        voluptates nesciunt blanditiis dignissimos repellendus dolorum est quos
        placeat officiis eos. Ullam, consequatur inventore velit consectetur
        excepturi incidunt ipsum quaerat eius dolorem, placeat dolore? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <img
        data-sal="flip-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        src={sloganImg2}
        alt="slogan"
        style={{
          display: "block",
        }}
      />
    </Layout>
  )
}

export default SecondPage
