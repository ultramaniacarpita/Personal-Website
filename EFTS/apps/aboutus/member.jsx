import React from "react";

var array = [
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Col P Isaac (Retd).","A conservationist, President"]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Mr. Govindaraman","Architect designing green homes and townships."]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Mrs. Shalini Isaac","Social worker, Secretary"]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Mr. Gajender Bharathy","Advocate"]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Mr. Kesavdas. Banker (Retd)","Community Worker, Treasurer"]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Mr. C Manohar"]
    },
    {
        image:"./image/about/silhoutte man.jpeg",
        desc:["Col HAS Sounderaraj (Retd)"]
    }
];

class Member extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover: 0,
            enter: false
        }

        this.renderDesc = this.renderDesc.bind(this);
        this.enter = this.enter.bind(this);
    }

    enter(i){
        console.log("mouse enter");
        this.setState({hover: i, enter: true});
    }

    renderDesc(){
        if(this.state.enter == false){
            return(
                <div>
                    {
                        array[this.state.hover].desc.map(function(current, i){
                            return(
                                <p>
                                    {
                                        current
                                    }
                                </p>
                            )
                        })
                    }
                </div>
            )
        }

        return(
            <div>
               {
                    array[this.state.hover].desc.map(function(current, i){
                        return(
                            <p>
                                {
                                    current
                                }
                            </p>
                        )
                    })
                }
            </div>
        )

    }

    render(){
        var enter = this.enter;

        return(
            <div className = "about-us-member-elem">
                <h1>Executive Committee Member</h1>
                <div className = "about-us-member-img-row">
                    {
                        array.map(function(current, i){
                            return(
                                <div className="about-us-member-img-box" onMouseEnter = {function(e){
                                    enter(i)
                                }}>
                                    <img src ={current.image} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className = "about-us-member-desc-row">
                    {
                        this.renderDesc()
                    }
                </div>
            </div>
        )
    }
}

export default Member;