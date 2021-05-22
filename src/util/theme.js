import React from "react";
import {
  useTheme,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createLocalStorageStateHook } from "use-local-storage-state";

const themeConfig = {
  // Light theme
  light: {
    palette: {
      type: "light",
      primary: {
        // Use hue from colors or hex
        main: colors.indigo["500"],
        // Uncomment to specify light/dark
        // shades instead of automatically
        // calculating from above value.
        //light: "#4791db",
        //dark: "#115293",
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        // Background for <body>
        // and <Section color="default">
        default: "#fff",
        // Background for elevated
        // components (<Card>, etc)
        paper: "#fff",
      },
    },
  },

  // Dark theme
  dark: {
    palette: {
      type: "dark",
      primary: {
        // Same as in light but we could
        // adjust color hue if needed
        main: colors.indigo["500"],
      },
      secondary: {
        main: colors.pink["500"],
      },
      background: {
        default: colors.grey["900"],
        paper: colors.grey["800"],
      },
    },
  },

  // Values for both themes
  common: {
    typography: {
      fontSize: 14,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      // Uncomment to make button lowercase
      // button: { textTransform: "none" },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1920,
      },
    },
    // Override component styles
    overrides: {
      // Global styles
      MuiCssBaseline: {
        "@global": {
          "#root": {
            // Flex column that is height
            // of viewport so that footer
            // can push self to bottom by
            // with auto margin-top
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            // Prevent child elements from
            // shrinking when content
            // is taller than the screen
            // (quirk of flex parent)
            "& > *": {
              flexShrink: 0,
            },
          },
        },
      },
    },
  },
};

function getTheme(name) {
  // Create MUI theme from themeConfig
  return createMuiTheme({
    ...themeConfig[name],
    // Merge in common values
    ...themeConfig.common,
    overrides: {
      // Merge overrides
      ...(themeConfig[name] && themeConfig[name].overrides),
      ...(themeConfig.common && themeConfig.common.overrides),
    },
  });
}

// Create a local storage hook for dark mode preference
const useDarkModeStorage = createLocalStorageStateHook("isDarkMode");

export const ThemeProvider = (props) => {
  // Get system dark mode preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });

  // Get stored dark mode preference
  let [isDarkModeStored, setIsDarkModeStored] = useDarkModeStorage();

  // Use stored dark mode with fallback to system preference
  const isDarkMode =
    isDarkModeStored === undefined ? prefersDarkMode : isDarkModeStored;

  // Get MUI theme object
  const themeName = isDarkMode ? "dark" : "light";
  const theme = getTheme(themeName);

  // Add toggle function to theme object
  theme.palette.toggle = () => setIsDarkModeStored((value) => !value);

  return (
    <MuiThemeProvider theme={theme}>
      {/* Set global MUI styles */}
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

// Hook for detecting dark mode and toggling between light/dark
// More convenient than reading theme.palette.type from useTheme
export function useDarkMode() {
  // Get current Material UI theme
  const theme = useTheme();
  // Check if it's the dark theme
  const isDarkMode = theme.palette.type === "dark";
  // Return object containing dark mode value and toggle function
  return { value: isDarkMode, toggle: theme.palette.toggle };
}
