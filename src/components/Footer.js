import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useDarkMode } from "./../util/theme.js";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 32,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size="small"
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
          </div>

          
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/faq" className={classes.link}>
                FAQ
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>

              <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <GitHubIcon fontSize="small" />
            </a>

            </Typography>
            
          </div>
          
          <div className={`${classes.item} ${classes.right}`}>
          </div>

          {props.copyright && (
            <div className={`${classes.item} ${classes.left}`}>
              <Link to="/" className={classes.link}>
              <Typography component="p">{props.copyright}</Typography>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
