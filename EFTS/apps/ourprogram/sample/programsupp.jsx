import React from "react";
import ProgramDesc from "./programdesc.jsx";

var array = [
"Handling Domestic Waste", "Composting at home",
"Planting and Nurturing Trees", "Changing Public Attitude"
];

class ProgramSupp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title
        };

        this.click = this.click.bind(this);
        this.first = this.first.bind(this);
    }
    
    click(){
        switch(this.state.title){
            case 0:
                return(
                    <div>{this.first()}</div>
                )
            default:
                return(<div>{this.first()}</div>)
        }
    }

    first(){
        return(
            <div>
                <ProgramDesc />
            </div>
        )
    }

    render(){
        var htmlarray = [];
        for(var i = 0; i < array.length; i++){
            htmlarray.push(
                <div className="prog-supp-title-div">
                    <a onClick = {this.click()}><div>{array[i]}</div></a>
                </div>
            )
        }
       
        return(
            <section>
                <div className="prog-supp-title">
                    {
                        htmlarray
                    }
                </div>
                <div>
                    {
                        this.click()
                    }
                </div>
            </section>
        )
    }
}

export default ProgramSupp;