import React from "react";
import Header from "./../header/header.jsx";
import Footer from "./../footer/footer.jsx";
import GalleryComp from "./gallerycomp.jsx";


class Gallery extends React.Component{

    render(){
        return(
            <section>
                <Header />
                <GalleryComp />
                <Footer />
            </section>
        )
    }
}

export default Gallery;