import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import SendEmail from "./sendEmail.jsx";
import Contact from "./contact.jsx";
require("../../css/sass/style.scss");


class HireSupp extends React.Component{
    render(){
        return(
            <section className="hire-sec">
                <div className="hire-page">
                    <Contact />
                    <SendEmail />
                </div>
            </section>
        )
    }
}

export default HireSupp;