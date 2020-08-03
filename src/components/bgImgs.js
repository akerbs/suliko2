import "./bgImgs.css"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({}))

const bgImgs = () => {
  const classes = useStyles()

  return (
    <div class="l-wrapper">
      <ul class="rotation rotation--layers">
        <li class="rotation__item item--1"></li>
        <li class="rotation__item item--2"></li>
        <li class="rotation__item item--3"></li>
        <li class="rotation__item item--4"></li>
      </ul>

      <div class="progress"></div>
    </div>
  )
}

export default bgImgs
