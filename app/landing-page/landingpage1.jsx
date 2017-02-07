import React from "react";
import Parallax from "../components/parallax.jsx";
require("../../css/sass/style.scss");

class LandingPage1 extends React.Component{

    render(){
        return(
            <div className="main-page">
                <Parallax styleClass = "back-work" mobile = {480} >
                    <div className = "mid-image">
                    </div>
                </Parallax>
            </div>
        )
    }
}


export default LandingPage1;