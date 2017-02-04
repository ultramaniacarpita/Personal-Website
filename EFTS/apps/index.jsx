import React from "react";
import {render} from "react-dom";
import MainApp from "./mainapp.jsx";
import {Router, Route, hashHistory, browserHistory} from "react-router";
import AboutUs from "./aboutus/aboutus.jsx";
import OurProgram from "./ourprogram/ourprogram.jsx";
import Gallery from "./gallery/gallery.jsx";
import Contact from "./contact/contact.jsx";


render((
        <Router history={hashHistory}>
            <Route path="/" component={MainApp}>
                
            </Route>
            <Route name="home" path="/home" component={MainApp}/>
            <Route name="aboutus" path="/aboutus" component={AboutUs} />
            <Route name="ourprogram" path="/ourprogram" component={OurProgram} />
            <Route name="gallery" path="/gallery" component={Gallery} />
            <Route name="contact" path="/contact" component={Contact} />

            <Route path="*" component={MainApp}/>

        </Router>
 
), document.getElementById('vikki'));



