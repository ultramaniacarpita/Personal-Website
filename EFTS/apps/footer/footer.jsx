import React from "react";
import {Link} from "react-router";
import Footer768 from "./footerScreen768.jsx";
import Credit from "./../credits/credit.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';



class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            onclick : false
        };

        // this.facebook = this.facebook.bind(this);
        this.clickCredit = this.clickCredit.bind(this);
        this.creditBar = this.creditBar.bind(this);
        this.button = this.button.bind(this);
        this.bottomBar = this.bottomBar.bind(this);
    }

    button(){
        this.setState({onclick: false})
    }

    clickCredit(){
        console.log("click");
        if(this.state.onclick ==  false){
            this.setState({onclick: true});
        }
        else{
            this.setState({onclick: false});
        }
    }

    creditBar(){
        if(this.state.onclick == false){
            return(
                <div>
                </div>
            )
        }
        else{
            return(
                <div className="credit-bar">
                    <div className="credit-bar-text-area">
                        <h4><b>Email:</b> mishraarpita07@gmail.com</h4>
                        <p>Home-page's pictures are taken from Freepik.com</p>
                        <div className="credit-btn">
                            <MuiThemeProvider>
                                <FlatButton label="Close" primary={true} onClick={this.button}
                                    backgroundColor="#b71c1c" rippleColor = "#b71c1c"
                                    labelStyle={{textTransform : "capitalize",
                                                color : "white"}} />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            )
        }
    }

    bottomBar(){
        if(window.screen.availWidth < 768){
            return(
                <div className = "bottom-bar">
                    <div className = "bottom-bar-text-area">
                        <h5><span>Designed and Developed by Arpita Mishra <br/> Created by using React  </span>
                            <i className="fa fa-chevron-circle-right chevron-btn" aria-hidden="true" onClick={this.clickCredit}> </i>
                        </h5>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className = "bottom-bar">
                    <div className = "bottom-bar-text-area">
                        <h5><span>Designed and Developed by Arpita Mishra | Created by using React  </span>
                            <i className="fa fa-chevron-circle-right chevron-btn" aria-hidden="true" onClick={this.clickCredit}> </i>
                        </h5>
                    </div>
                </div>
            )
        }
    }

    // facebook(){
    //     var d = document;
    //     (function(d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s); js.id = id;
    //     js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
    //     fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'))
    // }

    render(){
        
        return(
            <section>
                <div className = "footer-page">
                    <div className = "footer-page-block-1">
                        <div className = "footer-page-block-1-elem">
                            <h2> Follow us: </h2>
                            <div>Twitter</div>
                            <div>Facebook</div>
                            <div>Google+ </div>
                        </div>
                    </div>

                    <div className = "footer-page-block-2">
                        <h2> Connect with us: </h2>
                        <div className="footer-page-block-2-elem">
                            <div>
                                <i className="fa fa-phone"></i>
                            </div>
                            <div>
                                <p>984-046-6325</p>
                            </div>
                        </div>
                        <div className="footer-page-block-2-elem">
                            <div>
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <div>
                                <p><a href="mailto:info@eftsindia.com">info@eftsindia.com</a></p>
                            </div>
                        </div>
                        <div className="footer-page-block-2-elem">
                            <div>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p># 10, Victory Avenue, Kargil Street, Puthur, Mappedu, Chennai 600126</p>
                            </div>
                        </div>
                    </div>

                    <div className = "footer-page-block-3">
                        <div>
                            <Link to="/home" className="footer-element">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/aboutus" className="footer-element">
                                About us
                            </Link>
                        </div>
                        <div>
                            <Link to="/ourprogram" className="footer-element">
                                Our Program
                            </Link>
                        </div>
                        <div>
                            <Link to="/gallery" className="footer-element">
                                Our Project
                            </Link>
                        </div>
                        <div>
                            <Link to="/contact" className="footer-element">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.creditBar()
                    }
                </div>
                <div>
                    {
                        this.bottomBar()
                    }
                </div>
           </section>
        )

    }
}


export default Footer;