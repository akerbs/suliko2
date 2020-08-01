import React from "react"
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
import Logo2 from "../images/Logo2.png"
import Grid from "@material-ui/core/Grid"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import CloseIcon from "@material-ui/icons/Close"
import bgPatternImg from "../images/bgPatternImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const drawerWidth = "auto"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
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
    paddingLeft: 5,
    paddingRight: 5,
  },

  logo2Img: {
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 0,
    maxWidth: 130,
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
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
    maxWidth: 500,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      maxWidth: 380,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
    },
  },
  list: { color: "white" },

  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  navLink: {
    // width: "100vw",
    color: "rgba(133,26,29)",
  },

  title: {
    flexGrow: 1,
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
    backgroundColor: "#f9eacf",

    backgroundRepeat: "repeat",
    overflowX: "hidden",
    width: drawerWidth,
    height: "100vh",
    // zIndex: 9999,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",

    margin: "0px 20px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  drawerItem: {
    textDecoration: "none",
    color: "rgba(133,26,29)",
    width: "100vw",
  },
  active: {
    color: "rgba(255,255,255)",
    textShadow: "rgba(133,26,29) 0 0 5px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),

    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.easeOutBounce,
    //   duration: theme.transitions.duration.complex,
    // }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.easeOutBounce,
    //   duration: theme.transitions.duration.complex,
    // }),
    marginRight: 0,
  },
}))
export const LangSwitch = () => {
  const classes = useStyles()

  return (
    <div>
      <List className={classes.list}>
        <Typography align="center" variant="body2">
          <ListItem className={classes.listItem}>deu</ListItem>
          <ListItem className={classes.listItem}>rus</ListItem>
          <ListItem className={classes.listItem}>geo</ListItem>
          <ListItem className={classes.listItem}>eng</ListItem>
        </Typography>
      </List>
    </div>
  )
}

function Header() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          color="transparent"
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <Hidden xsDown>
              {/* <Link to="/"> */}
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
              {/* </Link> */}
            </Hidden>

            <Hidden smUp>
              <LangSwitch />
            </Hidden>

            <Link to="/">
              <Hidden smUp>
                <img src={Logo1} alt="logo" className={classes.logoImg} />
              </Hidden>
              <Hidden xsDown>
                <img src={Logo1Plus2} alt="logo" className={classes.logoImg} />
              </Hidden>
            </Link>
            <div style={{ display: "flex" }}>
              <Hidden xsDown>
                <LangSwitch />
              </Hidden>

              <IconButton
                style={{ paddingLeft: 5, color: "white" }}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon style={{ fontSize: 40 }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          transitionDuration={{ enter: 600, exit: 600 }}
          anchor="top"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <CloseIcon
              style={{
                fontSize: "4.5em",
                color: "#f9eacf",
              }}
            />

            <div>
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
            </div>
            <IconButton
              onClick={handleDrawerClose}
              style={{
                // alignSelf: "flex-start",
                marginBottom: "10vh",
                marginLeft: "2.5vh",
              }}
            >
              <CloseIcon
                color="primary"
                style={{
                  fontSize: 40,
                }}
              />
            </IconButton>
          </div>
          {/* <List className={classes.list}> */}
          {/* <div className={classes.drawerItems}> */}
          <Link
            to="/deu"
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
            to="/deu/about-us"
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
            to="/deu/menu"
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
            to="/deu/contact"
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/suliko_hamburg_"
            className={classes.navLink}
            //  onClick="this.blur()"
          >
            <ListItem
              button
              key={"instagram"}
              style={{
                display: "block",
                textAlign: "center",
                paddingTop: 15,
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </ListItem>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/restaurant.suliko.hamburg"
            className={classes.navLink}
            //  onClick="this.blur()"
          >
            <ListItem
              button
              key={"facebook"}
              style={{
                display: "block",
                textAlign: "center",
                paddingTop: 15,
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </ListItem>
          </a>
          {/* </div> */}
          {/* </List> */}
        </Drawer>
      </ThemeProvider>
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
