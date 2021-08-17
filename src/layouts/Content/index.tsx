import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/views/Home'));
const Task = lazy(() => import('@/views/Task'));
const NotFound = lazy(() => import('@/views/NotFound'));
export default class Content extends Component {
    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/task" component={Task}/>
                    <Route path="/404" component={NotFound}/>
                    <Redirect to="/404"/>
                </Switch>
            </Suspense>
        );
    }
}
