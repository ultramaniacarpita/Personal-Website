import React from "react";


class MidScreen extends React.Component{

    render(){
        return(
            <section className="mid-screen-768">
                <div className = "mid-screen-768-title-div">
                    <div className = "mid-screen-768-title home-mid-font-head">            
                        <h1>Our Vision</h1>
                    </div>
                </div>
                <div className = "mid-screen-768-desc home-mid-font-desc">
                    <p> Cities in India are growing at rapid pace. The new urban residential 
                        localities are generally unplanned with 20 to 30 feet roads with no 
                        sewage or storm water system in place. Garbage collection and disposal 
                        generally nonexistent. It takes many years for the municipal 
                        infrastructure to catch up and by that time the sewage and garbage 
                        pollute the environment. The narrow roads do not have trees. 
                    </p>
                    <p>
                        Our vision is to develop new urban residential areas as green and clean 
                        living spaces and conserve the earth for the future generation.
                    </p>
                </div>
            </section>
        )
    }
}


export default MidScreen;








