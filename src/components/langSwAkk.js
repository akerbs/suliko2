import "./langSwAkk.css"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  // accordion: {
  //   padding: 0,
  //   margin: "0 auto",
  //   width: "8vw",
  //   "&:hover&accordionItemContent": {
  //     height: 0,
  //     overflow: "hidden",
  //     transition: "height 0.25s",
  //   },
  //   "&:hover&accordionItem:hover&accordionItemContent": {
  //     height: "5em",
  //   },
  //   "&accordionItem&accordionItemContent": {
  //     height: "5em",
  //   },
  // },
  // accordionItem: {
  //   textAlign: "center",
  //   padding: " 1em",
  //   color: "black",
  //   borderRadius: "30px",
  //   backgrounColor: "white",
  // },
  // accordionItemContent: {
  //   height: 0,
  //   overflow: "hidden",
  //   transition: "height 0.25s",
  // },
  // list: {
  //   color: "white",
  //   listStyleType: "none",
  // },
  // listItem: {
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   marginTop: 0,
  //   marginBottom: 0,
  // },
}))

const LangSwAkk = () => {
  const classes = useStyles()

  return (
    <div class="accordion">
      <div class="accordion-item">
        Deu
        <div class="accordion-item-content">
          <span class="lang-item">
            <Link to="/page-2" class="link">
              Rus
            </Link>
          </span>
          <br />
          <span class="lang-item">
            <Link to="/page-2" class="link">
              Geo
            </Link>
          </span>
          <br />
          <span class="lang-item">
            <Link to="/page-2" class="link">
              Eng
            </Link>
          </span>
          <br />
          {/* <ul class="list">
            <li class="listItem">rus</li>
            <li class="listItem">geo</li>
            <li class="listItem">eng</li>
          </ul> */}
        </div>
      </div>
    </div>
    // <div class="accordion">
    //   {/* <Typography align="center" variant="body2"> */}
    //   <section class="accordionItem">
    //     deu
    //     <div class="accordionItemContent">
    //       <ul className={classes.list}>
    //         <li className={classes.listItem}>rus</li>
    //         <li className={classes.listItem}>geo</li>
    //         <li className={classes.listItem}>eng</li>
    //       </ul>
    //     </div>
    //   </section>
    //   {/* </Typography> */}
    // </div>
  )
}

export default LangSwAkk
