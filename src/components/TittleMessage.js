import React from "react";
import "./titleMessage.css";
import Typical from "react-typical";

function TittleMessage() {

  // const hireMe =() =>{

  // }
  return (
    <div className="titleMessage">
      <div className="heading">
        <p className="main">KRISHNA PATEL</p>
        <p className="sub">
        
        <Typical 
        loop={Infinity}
        steps={[
            "Web Developer",
            2000,
            "Software Developer",
            2000,
            "React Developer",
            2000

        ]}/>
        {/* <button variant="btn btn-primary btn-lg" onClick={hireMe} style={{background: "#F29191" , color:"#fff", border:"2px Solid white", }}>Hire Me</button> */}
        </p>
      </div>
    </div>
  );
}

export default TittleMessage;
