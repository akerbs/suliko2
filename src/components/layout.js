/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import theme from "./theme"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({}))

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <div
          style={{
            backgroundColor: "#f9eacf",
            // marginTop: "14vh",
            // maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
