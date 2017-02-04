import React from "react";
import {Link} from "react-router";


var array= [
    {
        name: "Home",
        path: "/home"
    },
    {
        name: "About us",
        path: "/aboutus"
    },
    {
        name: "Our Program",
        path: "/ourprogram"
    },
    {
        name: "Our Project",
        path: "/gallery"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mobBtnClick : false
        };

        this.list = this.list.bind(this);
        this.click = this.click.bind(this);
    }

    click(){
        console.log("clicked");
        if(this.state.mobBtnClick == false){
            this.setState({mobBtnClick: true});
        }
        else{
            this.setState({mobBtnClick: false});
        }
    }

    list(){
        if(this.state.mobBtnClick == false){
            return(
                <div>
                </div>
            )
        }
        
        return(
            <div className = "drop-down-div">
                <ul className="drop-down-menu-list">  
                    {
                        array.map(function(current, i){
                            return(
                                <li>
                                    <Link to={current.path} className="drop-down-menu-list-element header-font-block">
                                        {
                                            current.name
                                        }
                                    </Link>
                                </li>
                            )
                        })
                    }                         
                </ul>
            </div>
        )
    }

    render(){
        
        if(window.screen.availWidth <= 768){
            return(
                <section className = "nav-bar-sec">
                    <div className="header">
                        <div className = "top-bar">
                            <h6>Follow us:  
                                <b>Earth For Tomorrow Society</b>
                            </h6>
                        </div>
                        <div>
                        <div className="header-menu-list">
                            <div className="nav-bar-comp-logo">
                                <ul className= "header-logo">
                                    <li>
                                        <Link to="/" className="menu-list-element">
                                            <img src = "image/header/efts-logo.png"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className = "nav-bar-margin-div">
                            </div>
                            <div onClick={this.click} className = "nav-bar-logo">
                               <div className="nav-bar-fa"> <i className="fa fa-bars fa-3x" aria-hidden="true"></i> </div>
                            </div>
                            {
                                this.list()
                            }
                        </div>
                        </div>
                    </div>
                </section>
            )

        }
        else{
            return(
                <section className = "nav-bar-sec">
                    <div className="header">
                        <div className = "top-bar">
                            <h6>Follow us:  
                                <b> Earth For Tomorrow Society</b>
                            </h6>
                        </div>
                        <div className = "header-main">
                            <div className = "header-menu">
                                <div className="header-menu-list">
                                    <ul className= "header-logo">
                                        <li>
                                            <Link to="/" className="menu-list-element">
                                                <img src = "image/header/efts-logo.png"/>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="menu-list">    
                                     {
                                        array.map(function(current, i){
                                            return(
                                                <li>
                                                    <Link to={current.path} className="menu-list-element header-font-inline">
                                                        {
                                                            current.name
                                                        }
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }                                                
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Header;