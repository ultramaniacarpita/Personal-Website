import React from "react";
require("../../css/sass/style.scss");


var proj_name = [
{
    title: "PracticalGround",
    image: "./image/PG.jpg",
    iframe_src: 'http://www.practicalground.com',
    desc: ["PracticalGround is a skill specialization company working for Jammu Government. I was partly\
            responsible for development of their website."]
},
{
    title: "EFTS",
    image: "./image/efts.jpg",
    iframe_src:'EFTS/index.html',
    desc: ["EFTS is an NGO for which I have created a website in ReactJS. The pages are static for now. The\
            backend is being created in NodeJS."]
},
];

class Worksupp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            onclick : false,
            btnclicked: 0
        };

        this.click = this.click.bind(this);
        // this.renderDesc = this.renderDesc.bind(this);
        this.renderIframe = this.renderIframe.bind(this);
        this.close = this.close.bind(this);
    }

    click(i){
        this.setState({btnclicked: i, onclick: true});
    }

    close(i){
        this.setState({btnclicked: i, onclick: false});
    }
    // renderDesc(){
    //     if(this.state.onclick == false){
    //         return(
    //            <div className="work-pg-right">
    //                 <div className="proj-desc">
    //                     Click on the buttons and see my projects....
    //                 </div>
    //           </div> 
    //         )
    //     }
    //     else{
    //         return(
    //             <div className="work-pg-right">
    //                 <div className="proj-img">
    //                     <img src = {proj_name[this.state.btnclicked].image} />
    //                 </div>
    //                 <div className="proj-desc">
    //                     <p>
    //                         {
    //                             proj_name[this.state.btnclicked].desc
    //                         }
    //                     </p>
    //                 </div>
    //                 {
    //                 this.renderIframe()
    //                 }
    //             </div>
    //         )
    //     }

    // }

    renderIframe(){
        if(this.state.onclick == false){
            return(
                <div>  
                </div>
            )
        }
        else{
            return(
                <div className = "website">
                    <div className = "close-btn" onClick={this.close}>
                        <div><i className="fa fa-times fa-2x" aria-hidden="true"></i></div>
                    </div>
                    <iframe src={proj_name[this.state.btnclicked].iframe_src} 
                         width='100%' height='100%' frameBorder='0'>
                    </iframe>
                </div>
            )
        }
    
    }

    render(){
        var click = this.click;

        return(
            <section className="work-sec">
                <div className = "work-row">
                    {
                        proj_name.map(function(current, i){
                            return(
                                <div className = "work-box">
                                    <div className="proj-img">
                                        <img src = {current.image} />
                                    </div>
                                    <div className="proj-desc">
                                        <p>
                                            {
                                                current.desc
                                            }
                                        </p>
                                    </div>
                                    <div className = "proj-btn">
                                        <div onClick = {function(e){click(i)}}>
                                            Website
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.renderIframe()
                }
            </section>
        )
    }
}

export default Worksupp;



                // <div className="work-page">
                //     <div className="work-pg-left">
                //         {
                //             proj_name.map(function(current, i){
                //                 return(
                //                     <div className="proj-name" onClick = {function(e){ clicked(i) }}>
                //                         {
                //                             current.title
                //                         }
                //                     </div>
                //                 )
                //             })
                //         }
                //     </div>
                //     {
                //         this.renderDesc()
                //     }
                // </div>