import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


var array = [
    {
        title:"Handling Domestic Waste",
        desc:["Segregation of domestic waste is in escapable. Presently, it is not done. Collection by the municipal agencies is not done separately. Once wet and dry items are mixed together, segregating them after collection becomes costly and impractical. People find it cumbersome to segregate \on the basis of organic and non organic wastes. It is suggested that segregation should be done on the basis of Wet and Dry Wastes. Municipal collection may be done separately as wet and dry wastes by keeping separate collection bins marked as Wet and Dry."],
        font: "fa fa-trash fa-3x"
    },
    {
        title:"Composting at home",
        desc:["People may be motivated to compost kitchen waste and left over food by doable method of using terracotta or flower pots using very small area like 1.5 feet by 1.5 feet under the staircase, balcony or end of veranda.",
            "Dry wastes to be collected in two bags marked as 'Re-use' and 'Recycle 'at suitable place at home. Poly bags which can be used again to pack food kept in fridge or pack any item, to be kept in 'Reuse Bag' and utilised. Other dry items may be kept in 'Recycle Bag' and almost all of\ them can be sold along with the old newspaper by end of the month. Un saleable balance items may be disposed off as dry waste separated from wet waste. By this polythene bags polluting the environment can be stopped.",
            "At community and city level, wet wastes may be sent to landfill or disposed off by any other suitable arrangement. Dry waste collected separately can be easily segregated by the workers who collect the garbage from house to house or from collection bins.Recyclable waste may be taken \ by the recycling agents and balance items may be sent to land fill. By this there will be reduction of domestic waste by 50 % assuming 25 % of the people will compost at home and 100 % will segregate and dispose."],
        font: "fa fa-pagelines fa-3x"    
    },
    {
        title:"Planting and Nurturing Trees",
        desc:["Residential areas of rapidly growing urban areas need to have trees in their streets. Municipalities and Punchayats should be asked to have one side of even 24 feet roads free for planting trees and have the other side for drains and electrical poles. Each family should be motivated\ to plant minimum one tree in front of their homes."],
        font: "fa fa-tree fa-3x"    
    },
    {
        title:"Changing Public Attitude",
        desc:["The idea is for stopping people from dirtying public places in first place and remove the need to have them cleaned. The most suitable agents of this change of attitude are school and college students. They can be taught about segregation of wastes at source, home composting and\ planting and taking care of trees. Demonstration units may be available at all the schools and colleges. They will be given the responsibility to communicate and motivate people as suggested below.",
        "All schools and colleges to adopt 500 meters of street left and right of their gate. This area will be further subdivided and given to 6th class and above. Sign boards saying 'Adopted by ............School for Clean and Green Street' will be put up. Group of 5 students will approach the\ families and tell them 'Sir/ Madam / Uncle/ Aunty, we have adopted portion of the street in front of your house to be clean and green'. Kindly help us in this. Please segregate the home waste (as mentioned above) and keep the street polythene free and garbage free. It will also reduce the\ overall production of waste going to municipal dump. We shall demonstrate how to do.",
        "Also 'sir, we would like to plant a tree in front of your house. Can you please arrange for a tree guard?'' Next week or so students will bring a sapling procured by the school from Social Forestry Department , and make the youngest child of the house to plant the sapling. They will put a\ placard stating 'Planted by baby ............'. The mother will never let the tree die. In case, it is a shop, the students will make the shop owner to plant and put the placard 'Planted by Shri...........'. The man will take care of the tree.",
        "Students will be able follow up and have continued relationship as the area will be next to their school. By this method, each school will take care of one Km of the town. Students will be encouraged to do the same at their home, one house in front, one at left and one right of their\ house.",
        "Towns surely will have clean and green streets as number of kilometres as the number schools and colleges. Same will be the case for the entire country. Once students have seen the result of their involvement, living clean and green will be part of their culture to follow in their life."],
        font: "fa fa-users fa-3x"    
    },
];


class ProgDesc extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            clicked: 0,
            display: false
        }
        this.click =this.click.bind(this);
        this.renderNewDiv = this.renderNewDiv.bind(this);
        this.close = this.close.bind(this);
    }

    click(i){
        this.setState({clicked: i, display: true});
    }

    close(){
        this.setState({display: false});
    }

    renderNewDiv(){
        if(this.state.display == false){
            return(
                <div>
                </div>
            )
        }

        return(
            <div className="our-prog-disp-div">
                <div className="our-prog-disp-block">
                    <div className="our-prog-disp-title home-top-font-block">
                        <h6>
                            {
                                array[this.state.clicked].title
                            }
                        </h6>
                    </div>
                    <div className="our-prog-disp-desc home-mid-font-desc">
                        {
                            array[this.state.clicked].desc.map(function(current, i){
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
                    <div className="our-prog-disp-button">
                        <MuiThemeProvider>
                                <FlatButton label="Close" primary={true} onClick={this.close}
                                    backgroundColor="#b71c1c" rippleColor = "#b71c1c" hoverColor = "#00343C"
                                    labelStyle={{textTransform : "capitalize", fontSize: '1.6rem',
                                                color : "white", fontFamily: 'font-awe'}} />
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        var click = this.click;

        return(
            <section>
                <div>
                    {
                        array.map(function(current, i){
                            return(
                                <div className="our-prog-block-2-item home-top-font-block" onClick = {function(e){
                                    click(i)
                                }}>
                                    <i className={current.font}></i>
                                    <h5>
                                        {
                                            current.title
                                        }
                                    </h5>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.renderNewDiv()
                }
            </section>
        )
    }
}

export default ProgDesc;