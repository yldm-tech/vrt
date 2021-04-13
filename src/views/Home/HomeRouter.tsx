import React, { Component } from 'react';
import MyNavLink from "@/components/MyNavLink/MyNavLink";

class HomeRouter extends Component {
    render() {
        return (
            <div>
                <MyNavLink to='/home/message'>message</MyNavLink>
                <MyNavLink to='/home/news'>news</MyNavLink>
                <MyNavLink to='/home/posts'>posts</MyNavLink>
            </div>
        );
    }
}

export default HomeRouter;