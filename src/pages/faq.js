import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function FAQPage(props) {
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
<h1>FAQ</h1>
      <p>Q. But really, what is SpectraPlot?</p>

<p>A. SpectraPlot is a free, openly-available tool for scientists and engineers to simulate spectroscopic data and find the hardware you need to put spectroscopy into practice. SpectraPlot is an ongoing project, and we'll continue to add tools, databases, and calculators that benefit the science and engineering communities that advance and leverage spectroscopy.</p>

<p>Q. Who are you?</p>

<p>A. SpectraPlot was conceived and built by 4 PhDs who specialize in ultra-violet, near- and mid-infrared spectroscopic gas sensing and imaging techniques: Prof. Mitchell Spearrin of UCLA, Prof. Chris Goldenstein of Purdue, Dr. Christopher Strand at Stanford, and Dr. Victor Miller.</p>

<p>Q. Can I get some details on how this works and what assumptions are made in the simulation?</p>

<p>A. Yep! Check out our paper in JQSRT or arXiv. Additionally, check out the HITRAN and NIST websites for more information about the databases we use.</p>
      
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

export default FAQPage;
