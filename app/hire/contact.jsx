import React from "react";
require("../../css/sass/style.scss");


class Contact extends React.Component{
    render(){
        return(
            <div className="contact-page">
                <h1> Contact Info </h1>
                <div className="page-head">
                    <h3> 
                        If you want to contact me OR just want to say "HELLO",
                        Feel free to contact me.
                    </h3>
                    <div className ="page-add">
                            <h5> Arpita Mishra </h5>
                            <h5> Bengaluru, India </h5>
                            <h5> profile site address </h5>
                            <h5> mishraarpita07@gmail.com </h5>
                            <h5> +91-999-367-2076 </h5>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;