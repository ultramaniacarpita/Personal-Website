import React from "react";

var array = [
    {
        image:"./image/about/MalePic.jpg",
        name:"Col P. Isaac (Retd).",
        desc:"A conservationist, President"
    },
    {
        image:"./image/about/MalePic.jpg",
        name:"Mr. Govindaraman",
        desc:"Architect designer"
    },
    {
        image:"./image/about/FemalePic.png",
        name:"Mrs. Shalini Isaac",
        desc:"Social worker, Secretary"
    },
    {
        image:"./image/about/MalePic.jpg",
        name:"Mr. Gajender Bharathy",
        desc:"Advocate"
    },
    {
        image:"./image/about/MalePic.jpg",
        name:"Mr. Kesavdas. Banker (Retd)",
        desc:"Community Worker, Treasurer"
    },
    {
        image:"./image/about/MalePic.jpg",
        name:"Mr. C Manohar",
        desc: ""
    },
    {
        image:"./image/about/MalePic.jpg",
        name:"Col H.A.S. Sounderaraj (Retd)",
        desc: ""
    }
];


class Newmember extends React.Component{

    render(){

        return(
            <section>
                <div className="new-m-title home-mid-font-head ">
                    <h1>Executive Committee Member</h1>
                </div>
                <div className = "new-m-main">
                    <div className = "new-m-row">
                        {
                            array.map(function(current, i){
                                return(
                                    <div className = "new-m-box">
                                        <div className ="new-m-img">
                                            <div style = {{backgroundImage:'url('+ current.image + ')'}}>
                                            </div>
                                        </div>
                                        <div className = "new-m-decrip home-mid-font-desc">
                                            <p><b>
                                                {
                                                    current.name
                                                }
                                            </b></p>
                                            <p>
                                                {
                                                    current.desc
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}


export default Newmember;