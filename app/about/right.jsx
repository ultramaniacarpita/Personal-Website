import React from "react";
import { hashHistory } from 'react-router';
require("../../css/sass/style.scss");


var array = [
{
    title: "About myself:",
    desc: "I'm a front end designer/developer based in Bangalore, India."
},
{
    title: "What I do?",
    desc: "I have designed and developed whole front-end from scratch.\
          I am capable of developing both static and dynamic websites with React Flux and ajax."
},
{
    title: "Things I know?",
    desc: "I have deep understanding of JavaScript frameworks and I am proficient in \
            React.JS, HTML5, CSS3, Node.JS, SASS, Jquery."
},
{
    title: "Available for?",
    desc: "Available for short-term and long-term projects in JavaScript frameworks."
}
];

class RightSec extends React.Component{
    
    render(){
        return(
            <section className="bottom-sec">
                {
                    array.map(function(current, i){
                        return(
                            <div className="about-me">
                                <div className="about-me-title">
                                    {
                                        current.title
                                    }
                                </div>
                                <div className="about-me-desc">
                                    {
                                        current.desc
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}


export default RightSec;