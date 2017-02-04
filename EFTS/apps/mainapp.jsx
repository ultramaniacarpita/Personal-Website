import React from "react";
import Header from "./header/header.jsx";
import Frontpage from "./frontpage/frontpage.jsx";
import Footer from "./footer/footer.jsx";

class MainApp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Frontpage />
                <Footer />
            </div>
        )
    }
}

export default MainApp;