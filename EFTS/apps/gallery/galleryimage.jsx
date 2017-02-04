import React from "react";


class GalleryImage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover: false
        };

        this.onMouseHover = this.onMouseHover.bind(this);
        this.offMouseHover = this.offMouseHover.bind(this);
        this.renderDesc = this.renderDesc.bind(this);
    }
    
    onMouseHover(){
        console.log("mouse Enter");
        this.setState({hover: true});
    }

    offMouseHover(){
        console.log("mouse Leave");
        this.setState({hover: false});
    }

    renderDesc(){
        if(this.state.hover == false){
            return(
                <div>
                    <div className = "gallery-title">
                        <h4>
                            {
                                this.props.title
                            }
                        </h4>
                    </div>
                    <div className = "gallery-img" style = {{backgroundImage: 'url(' + this.props.image + ')' }}>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className = "gallery-title">
                        <h4>
                            {
                                this.props.title
                            }
                        </h4>
                    </div>
                    <div className = "gallery-desc">
                        <div>
                            <h4>' 
                                {
                                    this.props.desc
                                }
                                '
                            </h4>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className = "gallery-box" onMouseEnter = {this.onMouseHover} onMouseLeave = {this.offMouseHover}>
                {
                    this.renderDesc()
                }
            </div>
        )
    }
}


export default GalleryImage;