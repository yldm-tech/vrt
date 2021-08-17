import React, { Component, Fragment } from 'react';
import News from '@/views/Home/News';
import HomeRouter from '@/views/Home/HomeRouter';
import { Route } from 'react-router-dom';
import Posts from '@/views/Home/Posts';

export default class extends Component {
    render() {
        return (
            <Fragment>
                Home
                <HomeRouter />
                <Route path='/home/news' component={News} />
                <Route path='/home/posts' component={Posts} />
            </Fragment>
        )
    }
}
