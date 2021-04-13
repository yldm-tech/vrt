import React, { Component } from 'react'
import Home from '@/views/Home/Home'
import Task from '@/views/Task/Task'
import { Route } from 'react-router'
import { Redirect, Switch } from "react-router-dom";
import NotFound from "@/views/NotFound/NotFound";

export default class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/task' component={Task}/>
                <Route path='/404' component={NotFound}/>
                <Redirect to='/404'/>
            </Switch>
        )
    }
}
