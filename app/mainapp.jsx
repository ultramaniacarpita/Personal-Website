import React from "react";
import LandingPage from "./landing-page/landingpage.jsx"
import LandingPage1 from "./landing-page/landingpage1.jsx";
import LandingPage2 from "./landing-page/landingpage2.jsx";
import Hire from "./hire/hire.jsx";
import Work from "./work/work.jsx";
import About from "./about/about.jsx";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";


var Scroll = require('react-scroll');
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div>
                    <Element name="myhome" className="element" >
                        <LandingPage />
                    </Element>
                    <Element name="myabout" className="element-1" >
                        <About />
                    </Element>
                    <Element name="myhome1" className="element" >
                        <LandingPage1 />
                    </Element>

                    <Element name="mywork" className="element-1" >
                        <Work />
                    </Element>
                    <Element name="myhome2" className="element" >
                        <LandingPage2 />
                    </Element>

                    <Element name="myhire" className="element-1" >
                        <Hire />
                    </Element>
                </div>
            </div>
        )
    }
}

export default Main;