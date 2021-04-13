import React, { Component } from 'react';
import MyNavLink from "@/components/MyNavLink/MyNavLink";


export default class AppRouter extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <MyNavLink to='/home'>home</MyNavLink>
                    <MyNavLink to='/task'>task</MyNavLink>
                </div>
            </div>
        );
    }
}
