import React from "react";
// import {Link} from "react-router";
// import { Scrollspy } from 'react-scrollspy';
require("../../css/sass/style.scss");

var Scroll = require('react-scroll');
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

// var durationFn = function(deltaTop) {
//     return deltaTop;
// };

var menuName = [
    {name:'Home', path: 'myhome'},
    {name: 'About', path:'myabout'},
    {name: 'Work', path: 'mywork'},
    {name: 'Contact', path:'myhire'}
];

class Header extends React.Component{

    componentDidMount() {    
        Events.scrollEvent.register('begin', function(to, element) {
        console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
        console.log("end", arguments);
        });
    
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    
    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    handleSetActive(to) {
        console.log(to);
    }

    render() {
        if(window.screen.availWidth < 720){
            return (
                <section className="header-sec-sm">
                    <div className="header-main-sm">
                        <div className = "content-sm">
                            <Link to="myhome" spy={true} smooth={true} duration={100}>
                                <img src = "image/logo6.svg" className="menu-logo-sm" />
                            </Link>
                        </div>
                        <div className = "content-1-sm">
                            {
                                menuName.map(function(current, i){
                                    return(
                                        <div className="menu-name-sm">
                                            <Link activeClass="menu-element-act-sm" className="menu-element-sm" to={current.path} 
                                                    spy={true} smooth={true} duration={100}>
                                                {
                                                    current.name
                                                }
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <div className="header-btn-sm">
                        <div className="top-button-sm">
                            <a onClick={this.scrollToTop}><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
                        </div>
                        <div className="bot-button-sm">
                            <a onClick={this.scrollToBottom}><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </section>   
            )
        }
        else{
            return (
                <section className="header-sec">
                    <div className="header-main">
                        <div className = "content">
                            <Link to="myhome" spy={true} smooth={true} duration={100}>
                                <img src = "image/logo6.svg" className="menu-logo" />
                            </Link>
                        </div>
                        <div className = "content-1">
                            {
                                menuName.map(function(current, i){
                                    return(
                                        <div>
                                            <div className="menu-name">
                                                <Link activeClass="menu-element-act" className="menu-element" to={current.path} 
                                                        spy={true} smooth={true} duration={100}>
                                                    {
                                                        current.name
                                                    }
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <div className="header-btn">
                        <div className="top-button">
                            <a onClick={this.scrollToTop}><i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i></a>
                        </div>
                        <div className="bot-button">
                            <a onClick={this.scrollToBottom}><i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </section>   
            )
        }
    }
}

export default Header;

        // render(){
        //     return(
        //         <section className="header-sec">
        //             <div className="header-main">
        //                 <div className = "content">
        //                     <Link activeClass="active" to="/">
        //                         <img src = "image/logo6.svg" className="menu-logo"/>
        //                     </Link>
        //                 </div>
        //                 <div className = "content-1">
        //                 {
        //                     menuName.map(function(current, i){
        //                         return(
        //                             <div className="menu-name">
        //                                 <Link activeClass="active" to={current.path} smooth={true} spy={true} offset={50}
        //                                     duration={500} onSetActive={this.handleSetActive}  className="menu-element">
        //                                     {
        //                                         current.name
        //                                     }
        //                                 </Link>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //                 </div>
        //             </div>
        //         </section>
        //     )
        // }
    


