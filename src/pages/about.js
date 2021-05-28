import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function AboutPage(props) {
  return (
    <>
    
    

      <Navbar
        color="primary"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />

      <Container maxWidth="md">
        <Grid container={true} direction="row" md={12} spacing={1}>
          <Grid item={true} xs={12} md={12} >
          <h1>About</h1>
          <p>SpectraPlot Ltd. is a 501(c)(3) non-profit organization. Our mission is twofold: 1) to strengthen the spectroscopy community and 2) to organize the photonics industry's information for spectroscopists.</p>

          <p>To achieve these goals, Spectraplot offers integrated search tools for wavelength-dependent data (including spectral simulators and hardware listings) organized around function and use. These tools are aimed to accelerate spectroscopic and optical engineering and to remove transactional friction in the photonics industry. We hope you will join us in this mission by simply using our tools. If you are a vendor interested in either supporting SpectraPlot or including your catalogue on the site, get in touch with us at info@spectraplot.com. A couple FAQs are addressed below.</p>

        </Grid>
      </Grid>

</Container>
      <Footer
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2021 Spectraplot LTD"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
        sticky={true}
      />
    
    

    </>
  );
}

export default AboutPage;
