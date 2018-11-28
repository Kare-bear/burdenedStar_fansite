import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from "./App"

export default class Routes extends Component{
    render(){
        return(
            <Switch>                
                <Route exact path = "/" component = {Landing}/>
            </Switch>
        )
    }
}