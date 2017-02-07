import React from "react";
import LeftSec from "./left.jsx";
import RightSec from "./right.jsx"
require("../../css/sass/style.scss");


class About extends React.Component{
    render(){
        return(
            <div className="about-page">
                <LeftSec/>
                <RightSec />
            </div>

            // <div className="about-page">
            //    <div className="home-page">
            //         <LeftSec/>
            //         <RightSec />
            //     </div>
            // </div>
        )
    }
}

export default About;