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
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Img from "gatsby-image"
import ContactPage from "./contact"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
}))

const IndexPage = props => {
  const classes = useStyles()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,

    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

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
        <br /> <br /> <br /> <br />
        <Container id="abount us">
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
          <br /> <br />
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
            passt...
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
        <Container id="carousel">
          <Slider {...settings}>
            <div>
              <Img
                fluid={props.data.s1.childImageSharp.fluid}
                alt="Suliko 1"
                style={{ margin: 1 }}
              />
            </div>
            <div>
              <Img
                fluid={props.data.s2.childImageSharp.fluid}
                alt="Suliko 2"
                style={{ margin: 1 }}
              />
            </div>
            <div>
              <Img
                fluid={props.data.s3.childImageSharp.fluid}
                alt="Suliko 3"
                style={{ margin: 1 }}
              />
            </div>
            <div>
              <Img
                fluid={props.data.s4.childImageSharp.fluid}
                alt="Suliko 4"
                style={{ margin: 1 }}
              />
            </div>
          </Slider>
        </Container>
        {/* <ContactPage /> */}
      </Container>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    s1: file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s2: file(relativePath: { eq: "s2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s3: file(relativePath: { eq: "s3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s4: file(relativePath: { eq: "s4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
