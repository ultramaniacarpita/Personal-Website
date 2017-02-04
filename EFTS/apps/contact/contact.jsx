import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


class Contact extends React.Component{

    render(){

        return(
            <section>
                <Header />
                <div className="contact-main">
                    <div className = "contact-main-box home-top-font-block">
                        <h6>If you would like to know more about EFTS, or would like to participate, you may :</h6>
                        <div className = "contact-block">
                            <div className = "contact-mail-box">
                                <div className = "box-content">
                                    <h3>Send us a mail</h3>
                                    <div className="contact-fa">
                                        <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                                    </div>
                                    <p><a href="mailto:info@eftsindia.com">info@eftsindia.com</a></p>
                                </div>
                            </div>
                            <div className="contact-call-box">
                                <div className = "box-content">
                                    <h3>Give us a call</h3>
                                    <div className="contact-fa">
                                        <i className="fa fa-phone-square fa-3x" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        984-046-6325 <br/> 994-048-9098
                                    </p>
                                </div>
                            </div>
                            <div className = "contact-add-box">
                                <div className = "box-content">
                                    <h3>Get in touch with us</h3>
                                    <div className="contact-fa">
                                        <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        # 10, Victory Avenue, Kargil Street,<br/> Puthur, Mappedu, Chennai 600126
                                    </p>
                                </div>
                            </div>                
                        </div>
                    </div>

                    <div className = "download-form">
                        <div className = "download-form-text">
                            <p>If you want to become a member, kindly download the membership form and 
                                email the filled form to isaac@eftsindia.com</p>
                        </div>
                        <div className = "download-form-button">
                            <MuiThemeProvider>
                                    <FlatButton label="Download Form" primary={true} onClick={this.close} href = "membership form/EFTS_Membership_Form.docx"
                                        backgroundColor="#b71c1c" rippleColor = "#b71c1c" hoverColor = "#00343C"
                                        labelStyle={{textTransform : "capitalize", fontSize: '1.8rem',
                                                    color : "white", fontFamily: 'font-awe'}} />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default Contact;