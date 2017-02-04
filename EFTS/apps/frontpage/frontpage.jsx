import React from "react";
import TopSection from "./topSection.jsx";
import MidSection from "./midSection.jsx";
import BottomSection from "./bottomsection.jsx";

class Frontpage extends React.Component{

    render(){
        return(
            <section className="home-page">                
                <TopSection />
                <MidSection />
                <BottomSection />
            </section>
        )
    }
}


export default Frontpage;