import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function ContactPage(props) {
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
<h1>Contact</h1>
      <p>Shoot us an email at <a href="mailto:info@spectraplot.com">info@spectraplot.com</a></p>
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

export default ContactPage;
