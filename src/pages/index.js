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
import Typography from "@material-ui/core/Typography"

import Header from "../components/header"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
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
      <Container maxWidth="md">
        {/* <p
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
          style={{
            display: "block",
            zIndex: 999,
          }}
        >
          Liebe
        </p> */}
        <Container id="abount us">
          <Typography
            variant="h6"
            align="center"
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-easing="ease"
            style={{
              display: "block",
              zIndex: 999,
            }}
          >
            Das Essen, das zu Ihrem Lebensstil passt
          </Typography>
          <br />
          <Typography
            variant="body1"
            style={{ lineHeight: 1.5 }}
            color="secondary"
            data-sal="zoom-in"
            data-sal-delay="500"
            data-sal-easing="ease"
            style={{
              display: "block",
              zIndex: 999,
            }}
          >
            Herzlich willkommen in unserem Restaurant Suliko. Bei uns werden Sie
            im richtigen Sinne des Wortes mit leckerem Essen, angenehmen
            Ambiente und georgischer Gastfreundlichkeit verwöhnt. Lassen Sie
            einen Blick auf unser Menü werfen und sprechen Sie uns an. Bei uns
            können Sie zwischen abwechslungsreichen Gerichten, gutem Wein und
            gebackenen georgischen Brot wählen. Wir würden Ihnen dabei für alle
            festlichen Anlässe oder / und einfachen Abend mit Freunden und
            Familie oder einem romantischen Abend zur Zweit zur Seite stehen und
            machen für Sie ein individuelles Angebot, das zu Ihrem Lebensstil
            passt. ...
            <Link
              to="/deu/about-us"
              className={classes.navLink}
              activeClassName={classes.active}
            >
              lesen weiter
            </Link>
          </Typography>
        </Container>
        <br /> <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          commodi earum possimus, odit laboriosam voluptatibus numquam labore
          quod, culpa optio exercitationem sint eveniet maxime quam amet
          voluptates nesciunt blanditiis dignissimos repellendus dolorum est
          quos placeat officiis eos. Ullam, consequatur inventore velit
          consectetur excepturi incidunt ipsum quaerat eius dolorem, placeat
          dolore? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Praesentium commodi earum possimus, odit laboriosam voluptatibus
          numquam labore quod, culpa optio exercitationem sint eveniet maxime
          quam amet voluptates nesciunt blanditiis dignissimos repellendus
          dolorum est quos placeat officiis eos. Ullam, consequatur inventore
          velit consectetur excepturi incidunt ipsum quaerat eius dolorem,
          placeat dolore?
        </p>
        <img
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
          src={sloganImg2}
          alt="slogan"
          style={{
            display: "block",
            zIndex: 999,
          }}
        />
      </Container>
    </Layout>
  )
}
export default IndexPage
