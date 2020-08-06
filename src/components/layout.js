import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import theme from "./theme"
import Footer from "./footer"
// import LangSwAkk from "../components/langSwAkk"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <LangSwAkk /> */}
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
