import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { ThemeProvider } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Logo1Plus2 from "../images/Logo1Plus2.gif"
import Logo1 from "../images/Logo1.gif"
import Logo1x from "../images/logo2.gif"
import Logo2 from "../images/Logo2.png"
import Grid from "@material-ui/core/Grid"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import CloseIcon from "@material-ui/icons/Close"
import bgPatternImg from "../images/bgPatternImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import LangSwAkk from "./langSwAkk"
import Button from "@material-ui/core/Button"

const drawerWidth = "auto"

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 0,
    margin: 0,
    // padding: "0px  20px 0px 10px",
    // paddingLeft: 10,
    // paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
      // paddingLeft: 0,
      // paddingRight: 10,
    },
  },

  logo2Img: {
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 0,
    maxWidth: 120,
    // [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      maxWidth: 110,
    },
    // [theme.breakpoints.down("xs")]: {
    //   maxWidth: 200,
    // },
  },

  logoImg: {
    // justifyContent: "center",
    // alignSelf: "center",
    paddingTop: 18,
    paddingBottom: 0,
    marginBottom: 0,
    maxWidth: 490,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      maxWidth: 380,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 220,
      paddingTop: 5,
    },
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    // backgroundImage: `url(${bgPatternImg}) `,
    backgroundColor: "rgba(43,42,41)",
    // backgroundColor: "#f9eacf",
    // background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 92%)',
    backgroundRepeat: "repeat",
    overflowX: "hidden",
    width: drawerWidth,
    height: "100vh",
    // zIndex: 9999,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,
    // margin: "20px 20px 0px 0px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  mediaIcons: {
    display: "flex",
  },
  mediaIcon: {
    paddingRight: 0,
    // display: "block",
    // textAlign: "center",
    // paddingTop: 15,
  },
  navLink: {
    // width: "100vw",
    // color: "rgba(133,26,29)",
    color: "#f9eacf",
    "&:hover": {
      color: "white",
    },
  },
  drawerItem: {
    textDecoration: "none",
    color: "#f9eacf",
    width: "100vw",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
  },

  active: {
    color: "rgba(255,255,255)",
    textShadow: "rgba(133,26,29) 0 0 5px",
  },

  reservierenButton: {
    backgroundColor: "#f9eacf",
    // background: `url(${bgPatternImg}) `,

    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
}))

function Header() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [color, setColor] = useState("transparent")

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const listenScrollEvent = event => {
    if (window.innerWidth <= 600) {
      if (window.scrollY < 368) {
        setColor("transparent")
      } else if (window.scrollY > 365) {
        setColor("secondary")
      }
    } else {
      if (window.scrollY < 645) {
        setColor("transparent")
      } else if (window.scrollY > 648) {
        setColor("secondary")
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        color={color}
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden xsDown>
            <Link to="/">
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
            </Link>
          </Hidden>

          {/* <Hidden smUp>
              <LangSwAkk />
            </Hidden> */}

          <Link to="/">
            <Hidden smUp>
              <img src={Logo1} alt="logo" className={classes.logoImg} />
            </Hidden>
            <Hidden xsDown>
              <img src={Logo1Plus2} alt="logo" className={classes.logoImg} />
            </Hidden>
          </Link>
          <div style={{ display: "flex", justifyContent: "column" }}>
            {/* <Hidden xsDown>
                <LangSwAkk />
              </Hidden> */}
            <LangSwAkk />
            <IconButton
              style={{
                padding: 3,
                margin: "10px 10px 0px 0px",

                border: "1px solid black",
                // color: "white",
                color: "rgba(43,42,41)",
                // backgroundColor: "white",
                backgroundColor: "#f9eacf",
                // backgroundColor: "white",
              }}
              size="small"
              aria-label="open drawer"
              // edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon style={{ fontSize: 30, margin: 6 }} />
            </IconButton>
          </div>
          {/* <Button
              // size="small"
              className={classes.reservierenButton}
              variant="contained"
              // color="primary"
              // onClick={handleOpen}
            >
              Reservieren
            </Button> */}
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        transitionDuration={{ enter: 500, exit: 500 }}
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.mediaIcons}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/restaurant.suliko.hamburg"
              className={classes.navLink}
              //  onClick="this.blur()"
            >
              <ListItem button key={"facebook"} className={classes.mediaIcon}>
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </ListItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/suliko_hamburg_"
              className={classes.navLink}
              //  onClick="this.blur()"
            >
              <ListItem button key={"instagram"} className={classes.mediaIcon}>
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </ListItem>
            </a>
          </div>
          <CloseIcon style={{ color: "transparent" }} />

          {/* <div>
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
            </div> */}
          <IconButton
            // onClick={handleDrawerClose}
            style={{
              padding: 3,
              margin: "10px 10px 0px 0px",
              // color: "white",
              color: "rgba(43,42,41)",
              // backgroundColor: "white",
              // backgroundColor: "#f9eacf",
              backgroundColor: "#f9eacf",
            }}
            size="small"
            aria-label="close drawer"
            edge="end"
            onClick={handleDrawerClose}
            // className={clsx(open && classes.hide)}
          >
            <CloseIcon style={{ fontSize: 30, margin: 6 }} />
          </IconButton>
        </div>
        {/* <List className={classes.list}> */}
        {/* <div className={classes.drawerItems}> */}
        <Link
          to="/page-2"
          className={classes.drawerItem}
          activeClassName={classes.active}
        >
          <ListItem button key={"HOME"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  HOME
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Link
          to="/page-2"
          className={classes.drawerItem}
          activeClassName={classes.active}
        >
          <ListItem button key={"ÜBER UNS"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  ÜBER UNS
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Link
          to="/page-2"
          className={classes.drawerItem}
          activeClassName={classes.active}
        >
          <ListItem button key={"MENÜ"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  MENÜ
                </Typography>
              }
            />
          </ListItem>
        </Link>

        <Link
          to="/page-2"
          className={classes.drawerItem}
          activeClassName={classes.active}
        >
          <ListItem button key={"KONTAKT"}>
            <ListItemText
              primary={
                <Typography align="center" variant="h6">
                  KONTAKT
                </Typography>
              }
            />
          </ListItem>
        </Link>

        {/* </div> */}
        {/* </List> */}
        <div style={{ margin: "10px auto" }}>
          <img src={Logo2} alt="logo" className={classes.logo2Img} />
        </div>
      </Drawer>
    </ThemeProvider>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
