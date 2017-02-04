import React from "react";
import {render} from "react-dom";
import Main from "./mainapp.jsx";
import {Router, Route, hashHistory, browserHistory} from "react-router";


render((
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                
            </Route>
            <Route name="Home" path="/home" component={Main}/>

            <Route path="*" component={Main}/>

        </Router>
 
), document.getElementById('vikki'));



