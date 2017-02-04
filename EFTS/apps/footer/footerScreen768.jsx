import React from "react";
import {Link} from "react-router";


class Footer768 extends React.Component{
   
    render(){

        return(
            <section>
                <div className = "footer-page">
                    <div className = "footer-page-block">
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

                    <div className = "footer-page-block">
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
                </div>

                <div className = "bottom-bar">
                    <ul className="footer-menu-list">
                        <li>
                            <Link to="/" className="footer-element">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-element">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-element">
                                Our Programs
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-element">
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
           </section>
        )

    }
}


export default Footer768;