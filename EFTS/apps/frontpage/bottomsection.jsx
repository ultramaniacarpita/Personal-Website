import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory } from 'react-router';
import NavigationChevronRight from "material-ui/svg-icons/navigation/chevron-right";



class BottomSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
        
        this.click = this.click.bind(this);
    }

    click(){
        hashHistory.push('/gallery');
    }

    render(){
            return(
                <section className="bot-page-sec">                
                    <div className="bot-page">  
                        <div className = "bot-page-title home-mid-font-head"> 
                            <h1> Our Activities </h1>
                        </div>
                        <div className="bot-page-desc-block">
                            <div className = "bot-page-sub-block home-mid-font-desc">
                                <p>
                                    "In Dec 2013, planted 250 trees in the campus of Mount Carmel School, Thiruvanchery, 
                                    Chennai 600073. Each sapling has been handed over to one student to nurture."
                                </p>
                            </div>
                            <div className = "bot-page-sub-block home-mid-font-desc">
                                <p>
                                    "The EFTS has arranged to plant 200 trees in a new residential area in the outskirts of Chennai.
                                    Also arranged to plant 250 saplings in Mt.Carmel Matriculation School at Tiruvancherry at Chennai.
                                    Children have been given responsibility to nurse the trees."
                                </p>
                            </div>
                            <div className = "bot-page-sub-block home-mid-font-desc">                        
                                <p>
                                    "Col P. Isaac had successfully done this in the schools and colleges in West and East Godavary districts 
                                    where he was the Group Commander of National Cadet Corps. Presently he is practicing the same in communities 
                                    in the out the skirts of Chennai."
                                </p>
                            </div>
                        </div>
                        <div className="bot-page-more">
                            <MuiThemeProvider>
                                <FlatButton label="More" primary={true} onClick={this.click}
                                    backgroundColor="#b71c1c" rippleColor = "#b71c1c" labelPosition = "before"
                                    labelStyle={{textTransform : "capitalize", fontSize: "2rem", fontFamily: "font-awe",
                                                color : "white", textAlign: "right", padding: "60px 0px 50px 30px"}} 
                                    icon = {<NavigationChevronRight style={{height: "30px",width: "50px"}} color= "white" />} />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </section>
            )
    }
    
}


export default BottomSection;








