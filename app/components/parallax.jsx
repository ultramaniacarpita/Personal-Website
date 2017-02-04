import React from "react";

class Parallax extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id : Math.random()*100 + "parallax",
            speed: this.props.speed == undefined ? 0.1 : this.props.speed,
            parallax: null,
            windowRes : window.screen.availWidth,
            userRes : this.props.mobile == undefined? window.screen.availWidth : this.props.mobile
        }
        this.parallaxScroll = this.parallaxScroll.bind(this);
    }

    parallaxScroll(){
        var parallax = this.state.parallax;
        var speed = this.state.speed;
        var windowYOffset = window.pageYOffset;
        var elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
        parallax.style.backgroundPosition = elBackgrounPos;
    }

    componentDidMount(){
        if(this.state.userRes <= this.state.windowRes){
            window.addEventListener('scroll', this.parallaxScroll);
            var parallax = document.getElementById(this.state.id);
            this.setState({parallax:parallax});
        }
    }

    componentWillUnmount(){
        if(this.state.userRes <= this.state.windowRes){
            window.removeEventListener('scroll', this.parallaxScroll);
        }
    }

    render(){
        return(
            <div id={this.state.id} className = {this.props.styleClass}>
                {
                    this.props.children
                }
            </div>
        )
    }
}


export default Parallax;