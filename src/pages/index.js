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
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
  container: {
    position: "relative",
    overflow: "hidden",
    height: 300,
    width: "100%",
    paddingTop: "50%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "100%",
    },
  },

  responsiveIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: 600,
    border: 0,
    marginTop: -150,
  },
  phoneEmailLink: {
    color: " rgba(255,255,255)",
    textDecoration: "none",

    "&:hover": {
      color: "rgba(133,26,29)",
      textShadow: "rgba(255,255,255) 0 0 5px",
    },
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
        <Container id="contact">
          <Container
            maxWidth="md"
            style={{
              margin: 0,
              paddingTop: 10,
              padding: 0,
              // background: "rgba(255,255,255, 0.75)",
            }}
          >
            <Container
              style={{
                background: "rgba(49, 10, 10, 0.75)",

                padding: "50px 15px 10px 15px",
                marginTop: 50,
                borderRadius: 10,
              }}
            >
              <Typography
                variant="body1"
                align="center"
                style={{ lineHeight: 2 }}
                color="secondary"
              >
                <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148
                Hamburg
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+4904049201953"
                  className={classes.phoneEmailLink}
                  //  onClick="this.blur()"
                >
                  <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:info@restaurant-suliko.de"
                  className={classes.phoneEmailLink}
                  //  onClick="this.blur()"
                >
                  <EmailIcon style={{ fontSize: 20 }} />{" "}
                  info@restaurant-suliko.de
                </a>
                <br /> <br />
                <ScheduleIcon style={{ fontSize: 20 }} /> Öffnungszeiten <br />
                Mo- Do 12:00 - 15:00, 17:00 - 22:00 <br />
                Fr 12:00 - 15:00, 17:00 - 24:00 <br />
                Sa 17:00 - 24:00 <br />
                Son 15:00 - 22:00 <br />
                <br />
              </Typography>
              <Container className={classes.container}>
                <iframe
                  className={classes.responsiveIframe}
                  src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
                ></iframe>
              </Container>
            </Container>
          </Container>
        </Container>
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
