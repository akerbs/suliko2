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

  logo2Img: {
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 0,
    maxWidth: 150,
    // [theme.breakpoints.down("md")]: {},
    // [theme.breakpoints.down("sm")]: {},
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
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
    },
  },
  list: {},

  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    marginLeft: 0,
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
    zIndex: 9999,
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
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))
export const LangSwitch = () => {
  const classes = useStyles()
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>deu</ListItem>
        <ListItem className={classes.listItem}>rus</ListItem>
        <ListItem className={classes.listItem}>geo</ListItem>
        <ListItem className={classes.listItem}>eng</ListItem>
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
          color="secondary"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Hidden xsDown>
              {/* <Link to="/"> */}
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
              {/* </Link> */}
            </Hidden>

            <Hidden smUp>
              <LangSwitch />
            </Hidden>

            <Link to="/">
              <img
                src={Logo1}
                srcSet={`${Logo1} 600w, ${Logo1Plus2} 1280w`}
                alt="logo"
                className={classes.logoImg}
              />
            </Link>
            <div style={{ display: "flex" }}>
              <Hidden xsDown>
                <LangSwitch />
              </Hidden>

              <IconButton
                color="inherit"
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
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="top"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon
                style={{
                  fontSize: 40,
                  color: "#f9eacf",
                }}
              />
            </IconButton>
            <div>
              <img src={Logo2} alt="logo" className={classes.logo2Img} />
            </div>
            <IconButton
              onClick={handleDrawerClose}
              style={{ alignSelf: "flexStart" }}
            >
              <CloseIcon
                color="primary"
                style={{
                  fontSize: 40,
                  alignSelf: "flexStart",
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
            to="/deu/imprint"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"IMPRESSUM"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    IMPRESSUM
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
          {/* <a
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
          </a> */}
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
