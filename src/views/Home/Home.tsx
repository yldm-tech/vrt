import React, { Component, Fragment } from 'react'
import Message from "@/views/Home/Message/Message";
import News from "@/views/Home/News/News";
import HomeRouter from "@/views/Home/HomeRouter";
import { Route } from "react-router-dom";
import Posts from "@/views/Home/Posts/Posts";

export default class extends Component {
    render() {
        return (
            <Fragment>
                Home
                <HomeRouter/>
                <Route path='/home/message' component={Message}/>
                <Route path='/home/news' component={News}/>
                <Route path='/home/posts' component={Posts}/>
            </Fragment>
        )
    }
}
