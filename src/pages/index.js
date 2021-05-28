import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

function IndexPage(props) {
  return (
    <>

    <Navbar
        color="primary"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
    {/*

      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Blackbody"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
      */}
      
      <Footer
        bgColor="default"
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

export default IndexPage;
