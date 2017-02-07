import React from "react";
import Parallax from "../components/parallax.jsx";
require("../../css/sass/style.scss");

class Top extends React.Component{

    render(){
        return(
            <div className="main-page">
                <Parallax styleClass = "top-image" mobile = {480}>
                        <div id="top-image">
                        </div>
                </Parallax>
            </div>
        )
    }
}


export default Top;