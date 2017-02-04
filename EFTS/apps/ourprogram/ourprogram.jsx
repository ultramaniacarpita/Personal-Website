import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import ProgDesc from "./progdesc.jsx"

class OurProgram extends React.Component{

    render(){

        return(
            <section>
                <Header />
                <div className="our-prog-main">
                    <div className="our-prog-block-1 home-top-font-block">
                            <h6>A PRACTICAL METHOD TO KEEP COMMUNITIES CLEAN AND GREEN.</h6>
                        <div className = "our-prog-block-1-cont home-mid-font-desc">
                            <p>Most of our people keep their houses clean but are not concerned about cleanliness of streets and public places. They do not hesitate to throw garbage in streets, parks, markets or beaches. It is difficult for someone to lift the garbage carelessly thrown, but it is          easier to keep the places clean if people just stop throwing garbage out in public places. The attitude needs to change. This article aims to enumerate methods to keep public places clean and green by changing attitude of people. 
                            </p>
                        </div>
                    </div>
                    <div className="our-prog-block-2">
                        <ProgDesc />
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default OurProgram;