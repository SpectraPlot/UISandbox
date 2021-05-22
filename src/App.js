import logo from './logo.svg';
import React from "react";

import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import ContactPage from "./pages/contact";

import BlackbodyPage from "./pages/blackbody";
import EmissionPage from "./pages/emission";
import AbsorptionPage from "./pages/absorption";
import LinesurveyPage from "./pages/linesurvey";
import Placeholder from "./pages/placeholder";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from "./util/theme.js";


function App(props) {
return (
  <ThemeProvider>
    <Router>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/faq" component={FAQPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          
          <Route path="/blackbody" component={BlackbodyPage}></Route>
          <Route path="/absorption" component={AbsorptionPage}></Route>
          <Route path="/emission" component={EmissionPage}></Route>
          <Route path="/survey" component={LinesurveyPage}></Route>
        </Switch>
    </Router>
  </ThemeProvider>
  );
}

export default App;