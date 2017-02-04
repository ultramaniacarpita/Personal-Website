import React from "react";
import GalleryImage from "./galleryimage.jsx"

var array = [
    {
        image:"./image/gallery/domestic-waste.jpg",
        title:"Handling Domestic waste",
        desc: "Segregating dry and wet waste at home"
    },
    {
        image:"./image/gallery/grow-veg.jpg",
        title:"Growing vegetables",
        desc: "Col P. Isaac harvesting from organic farming at home"
    },
    {
        image:"./image/gallery/handling-waste.jpg",
        title:"Handling Domestic Waste",
        desc:"Col P. Isaac demonstrating how to handle domestic waste"
    },
    {
        image:"./image/gallery/hosting-animal.jpg",
        title: "Hosting animals",
        desc: "Birds Nesting and hatchlings in the trees at Col P. Isaac's eco friendly residencal garden"
    },
    {
        image:"./image/gallery/kid-planting.jpg",
        title: "Kids Planting trees",
        desc: "Motivating the intrest for better cleaner and greener enviornment in children at young age"
    },
    {
        image:"./image/gallery/manure.jpg",
        title: "Making Manure from waste",
        desc: "Compost kitchen waste and left over food by doable method of using terracotta or flower pots using very small area"
    },
    {
        image:"./image/gallery/planting.jpg",
        title: "Tree Planting",
        desc: "Tree Planting"
    },
    {
        image:"./image/gallery/the-hindu.jpg",
        title: "The Hindu Downtown",
        desc: "(Photo of) Article covered by Hindu Downtown of 27 July 2014, on Green living program initiated by EFTS."
    },
    {
        image:"./image/gallery/tree-planting.jpg",
        title: "Tree Planting",
        desc: "Each family should be motivated to plant minimum one tree in front of their homes."
    }        
];

class GalleryComp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover : false,
            item: 0
        };
    }

    render(){

        return(
            <section className = "gallery-main home-mid-font-head">
                <h1> Our Recent Projects </h1>
                <div className = "gallery-row">
                    {
                        array.map(function(current, i){
                            return(
                                <GalleryImage image = {current.image} title ={current.title} desc = {current.desc} />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default GalleryComp;