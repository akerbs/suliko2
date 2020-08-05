import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import Logo2 from "../images/Logo2.png"

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
  logo2Img: {
    margin: "0 auto",
    maxWidth: 130,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 110,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.footerContainer}>
      <CssBaseline />
      <img src={Logo2} alt="logo" className={classes.logo2Img} />
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
