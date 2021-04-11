import React, { Component } from 'react'
import Home from '@/views/Home/Home'
import Task from '@/views/Task/Task'
import { Route } from 'react-router'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Route path='/home' component={Home} />
                <Route path='/task' component={Task} />
            </div>
        )
    }
}
