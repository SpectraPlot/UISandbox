import React from "react";
import Navbar from "./../components/Navbar";
import AbsorptionForm from "./../components/AbsorptionForm";
import Footer from "./../components/Footer";


function AbsorptionPage(props) {
  return (
    <>
    
    

      <Navbar
        color="primary"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
        page="absorption"
      />

      <AbsorptionForm
        color="primary"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      

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

export default AbsorptionPage;
