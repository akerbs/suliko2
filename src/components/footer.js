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

const useStyles = makeStyles(theme => ({}))

const Footer = props => {
  const classes = useStyles()
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",

        textAlign: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <CssBaseline />
      <img src={Logo2} alt="logo" style={{ maxWidth: 120, margin: "0 auto" }} />

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

      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ justifyContent: "center", display: "flex" }}
      >
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
