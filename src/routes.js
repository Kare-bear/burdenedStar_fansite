import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from "./Component/HomePage/HomePage";
import About from './Component/About/About';
import TestPage from  './Component/TestPage/testPage';

export default class Routes extends Component{
    render(){
        return(
            <Switch>                
                <Route exact path = "/" component = {HomePage}/>
                <Route path = "/about" component = {About}/>
                <Route path = "/testPage" component = {TestPage}/>
            </Switch>
        )
    }
}