import React from "react";
import SocialLinks from "../SocialLinks";


const aabc  = {

  marginTop:"7%"
}


function Home() {
  return (
      <>
    <div style={aabc} className=" container py-5 bg-info bg-opacity-10 shadow-lg text-center d-grid aabc">

      <h1 >Hello 
        I'm Nicholas Martin.
      </h1>
      <h5 className="text-decoration-underline mt-3">I am Web Dev enthusiastic about the Cloud. </h5>
  
    </div>
    <SocialLinks></SocialLinks>
    </>
    
  );
}

export default Home;
