import React, { useState } from "react";
import Section from "./Section";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDarkMode } from "./../util/theme.js";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
  linkTitle: {
    textDecoration: "none",
    color: "inherit",
    height:28,
    fontSize: 20,
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },

}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
           
            <Typography>
              <Link to="/" className={classes.linkTitle}>
                SpectraPlot
              </Link>
              </Typography>
           

            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>


            <Hidden smDown={true} implementation="css">
              <Button color="inherit" component={Link} to="/blackbody" 
              variant={props.page==="blackbody" && "outlined"}>
                Blackbody
              </Button>

              <Button color="inherit" component={Link} to="/absorption"
              variant={props.page==="absorption" && "outlined"}>
                Absorption
              </Button>

              <Button color="inherit" component={Link} to="/emission"
              variant={props.page==="emission" && "outlined"}>
                Emission
              </Button>

              <Button color="inherit" component={Link} to="/survey"
              variant={props.page==="survey" && "outlined"}>
                Survey
              </Button>

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>



      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem button={true} component={Link} to="/blackbody">
            <ListItemText>Blackbody</ListItemText>
          </ListItem>

          <ListItem button={true} component={Link} to="/absorption">
            <ListItemText>Absorption</ListItemText>
          </ListItem>

          <ListItem button={true} component={Link} to="/emission">
            <ListItemText>Emission</ListItemText>
          </ListItem>

          <ListItem button={true} component={Link} to="/survey">
            <ListItemText>Survey</ListItemText>
          </ListItem>


          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
