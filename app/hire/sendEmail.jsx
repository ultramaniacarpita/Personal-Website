import React from "react";
import $ from "jquery";
import Messenger from "../http/messenger.jsx";
require("../../css/sass/style.scss");



class SendEmail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            mail: "",
            message: "",
            sent : false
        };

        this.click = this.click.bind(this);
        this.onName = this.onName.bind(this);
        this.onMail = this.onMail.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.renderSentMsg = this.renderSentMsg.bind(this);
        this.onMsgSent = this.onMsgSent.bind(this);
    }

    click(e){
        console.log("click e:" +e);
        var current_msg = $("#textarea").val();
        var data = {
            name: this.state.name,
            mail: this.state.mail,
            message: current_msg
        }
        Messenger.post("sendmail", data, this.onSuccess, this.onFailure);
        this.setState({sent: true});
    }

    onName(e){
        this.setState({name: e.target.value});
    }

    onMail(e){
        this.setState({mail: e.target.value})
    }

    onSuccess(res){
        console.log("Response Success");
    }

    onFailure(err){
        console.log("Response Failure");
    }

    onMsgSent(){
        this.setState({sent: false})
    }

    renderSentMsg(){
        return(
            <div className = "dialog-box">
                <h2>Thank you for the message.</h2>
                    
                <div onClick = {this.onMsgSent} className="go-back-btn">
                    <i className="fa fa-long-arrow-left" aria-hidden="true">  Back to page</i>
                </div>
            </div>
        )
    }

    render(){
        if(this.state.sent == true){
            return(
                <section className="go-back-dialog">
                    {
                        this.renderSentMsg()
                    }
                </section>
            )
        }
        return(
            <div className = "email-page">  
                <div className="form-wrapper">
                    <div id="msg-form">
                        <div className="form-name">
                            <h5>Full-Name:</h5> 
                            <input type="text" name="firstName" placeholder="Your-Name" size="60" onChange={this.onName} ></input>
                        </div>
                        <br/>
                        <div className="form-detail">
                            <h5>Email-Address:</h5> 
                            <input type="email" name="email" placeholder="Email" size="56" onChange={this.onMail} ></input> 
                            <br/><br/>
                            <h5>Your-Message:</h5> 
                            <textarea id="textarea" name="message" rows="6" cols="57" placeholder="Message" form="msg-form"></textarea> 
                            <br/><br/>
                        </div>
                        <div className="form-btn">
                            <input type="Submit" value="Send Message" onClick={this.click}></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SendEmail;