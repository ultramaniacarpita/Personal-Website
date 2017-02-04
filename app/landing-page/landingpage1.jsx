import React from "react";
import Parallax from "../components/parallax.jsx";
require("../../css/sass/style.scss");

class LandingPage1 extends React.Component{

    render(){
        return(
            <div className="main-page">
                <Parallax styleClass = "mid-image" mobile = {480} >
                    <div id="mid-image">
                    </div>
                </Parallax>
            </div>
        )
    }
}


export default LandingPage1;