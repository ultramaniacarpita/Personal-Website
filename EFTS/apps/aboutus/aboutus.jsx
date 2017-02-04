import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import Objective from "./objective.jsx";
import Newmember from "./newmember.jsx";

class AboutUs extends React.Component{

    render(){

        return(
            <section>
            <Header />
                <div className="about-us-main">
                    <div className = "about-us-box">
                        <div className="about-us home-mid-font-head home-mid-font-desc">
                            <h1>About Us</h1>
                            <p>
                                <b>EFTS</b> is a registered body and governed by an Executive Committee of seven members from various walks of life bound by common passion for green and clean living.The founder president Col P Isaac is an environmentalist who had caused to plant large number of trees, adopted villages and made them garbage free and deeply involved in encouraging communities in green and clean living. His household maintains permanent demonstration on segregation of waste, home composting in restricted space, treatment of black water at home and reusing for the garden, terrace garden of vegetables and herbal plants and rainwater harvesting.
                            </p>
                        </div>
                    </div>
                    <div className="about-us-obj">
                        <Objective />
                    </div>
                    <div className="about-us-member">
                        <Newmember />
                    </div>
                </div>
            <Footer />
            </section>

        )
    }
}

export default AboutUs;