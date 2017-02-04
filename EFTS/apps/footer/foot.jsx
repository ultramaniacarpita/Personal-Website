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
                    <div className="credit-btn">
                        <MuiThemeProvider>
                            <FlatButton label="Close" primary={true} onClick={this.button}
                                backgroundColor="#b71c1c" rippleColor = "#b71c1c"
                                labelStyle={{textTransform : "capitalize",
                                            color : "white"}} />
                        </MuiThemeProvider>
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
                        <h2> Follow us: </h2>
                        <ul>
                            <li className = "footer-page-list-element">
                                <div>Twitter</div>
                            </li>
                            <li className = "footer-page-list-element">
                                <div>Facebook</div>
                            </li>
                            <li className = "footer-page-list-element">
                                <div>Google+ </div>
                            </li>
                        </ul>
                    </div>

                    <div className = "footer-page-block-2">
                        <h2> Get in touch with us: </h2>
                        <ul>
                            <li className = "footer-page-list-element">
                                <div>
                                    <i className="fa fa-phone fa-2x"></i>
                                </div>
                                <div>
                                    <i>984-046-6325</i>
                                </div>
                            </li>
                            <li className = "footer-page-list-element">
                                <div>
                                    <i className="fa fa-envelope-o fa-2x"></i>
                                </div>
                                <div>
                                    <p><a href="mailto:info@eftsindia.com">info@eftsindia.com</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className = "footer-page-block-3">
                        <ul className="footer-menu-list">
                            <li>
                                <Link to="/home" className="footer-element">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="footer-element">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/ourprogram" className="footer-element">
                                    Our Program
                                </Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div>
                    {
                        this.creditBar()
                    }
                </div>
                <div className = "bottom-bar">
                    <div className = "credit-bar-text-area">
                        <h5><span>Designed and Developed by </span> Arpita Mishra | Created by using React JS  </h5>
                        <div className="bottom-bar-2" onClick={this.clickCredit}>
                            Credits
                        </div>
                    </div>
                </div>
           </section>
        )

    }
}


export default Footer;