import React from "react";
import Parallax from "../components/parallax.jsx";
require("../../css/sass/style.scss");

class LandingPage2 extends React.Component{

    render(){
        return(
            <div className="main-page">
                <Parallax styleClass = "bot-image" mobile = {480} >
                    <div className = "bot-image">
                    </div>
                </Parallax>
            </div>
        )
    }
}


export default LandingPage2;