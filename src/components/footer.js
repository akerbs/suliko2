import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Logo2 from "../images/Logo2.png"
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  footerContainer: {
    // padding: theme.spacing(1, 1),
    display: "flex",
    flexDirection: "column",

    // paddingTop: 200,
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    // textShadow: "rgba(133,26,29)  0 0 5px",
    [theme.breakpoints.down("sm")]: {
      // marginBottom: 50,
      // paddingTop: 50,
    },
    // marginTop: "auto",
  },
  breadcrumbs: {
    justifyContent: "center",
    display: "flex",
    // flexDirection: "column",
    // textAlign: "center",
  },
  // extLink: {
  //   cursor: "pointer",
  //   color: "white",
  //   textShadow: "rgba(133,26,29)  0 0 5px",
  //   "&:hover": {
  //     textDecoration: "none",
  //     color: "rgba(133,26,29)",
  //     textShadow: "white 0 0 5px",
  //   },
  // },
}))

const Footer = props => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.footerContainer}>
      <CssBaseline />
      {/* 
      <Img
        fluid={props.data.Logo2.childImageSharp.fluid}
        alt="Logo 2 Suliko"
        className={classes.logo2Img}
      /> */}

      <img src={Logo2} alt="logo" style={{ maxWidth: 120 }} />

      <Typography variant="body2">
        {" © "} {new Date().getFullYear()} Suliko. All Rights Reserved
        <br />{" "}
        {/* <Typography variant="body2">All Rights Reserved</Typography> */}
      </Typography>

      {/* Designed by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://kerbs.now.sh/"
            className={classes.extLink}
          >
            Anatol Kerbs
          </Link> */}

      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Link color="inherit" href="#">
          <Typography variant="caption"> Impressum</Typography>
        </Link>
        <Link color="inherit" href="#">
          <Typography variant="caption"> Datenschutz</Typography>
        </Link>
      </Breadcrumbs>
    </Container>
  )
}

export default Footer

// export const query = graphql`
//   query {
//     Logo2: file(relativePath: { eq: "Logo2.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
