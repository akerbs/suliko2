import "./langSwAkk.css"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  // accordion: {
  //   padding: "0",
  //   alignSelf: "flex-end",
  //   marginTop: "auto",
  //   fontSize: "14px",
  //   width: "50px",
  //   height: "auto",
  //   marginBottom: "20px",
  //   marginLeft: "20px",
  //   position: "fixed",
  //   "&hover $accordionItemContent": {
  //     height: "0",
  //     overflow: "hidden",
  //     transition: "height 0.25s",
  //   },
  //   "&hover $accordionItem:hover $accordionItemContent": {
  //     height: "7.5em",
  //   },
  //   "& $accordionItem--default $accordionItemContent": {
  //     height: "7.5em",
  //   },
  // },
  // accordionItem: {
  //   textAlign: "center",
  //   padding: "1em 0",
  //   color: "black",
  //   borderRadius: "30px",
  //   backgroundColor: "#f9eacf",
  // },
  // accordionItemContent: {
  //   height: "0",
  //   overflow: "hidden",
  //   transition: "height 0.25s",
  // },
  // langItem: {
  //   display: "inline-block",
  //   paddingTop: "15px",
  // },
  // link: {
  //   textDecoration: "none",
  //   color: "black",
  //   "&:hover": { textDecoration: "none", color: "black", fontWeight: "bold" },
  // },
}))

const LangSwAkk = () => {
  const classes = useStyles()

  return (
    <div className={classes.accordion} class="accordion">
      <div className={classes.accordionItem} class="accordionItem">
        Deu
        <div
          className={classes.accordionItemContent}
          class="accordionItemContent"
        >
          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Rus
            </Link>
          </div>

          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Geo
            </Link>
          </div>

          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Eng
            </Link>
          </div>

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
