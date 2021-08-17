import React, { Component } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export default class MyNavLink extends Component<NavLinkProps> {

    // {children}
    // 相当于
    // <NavLink children={this.props.children} />
    // 功能等同于  angular的 ng-container， vue的 slot
    render() {
        return (
            <NavLink activeClassName="active" {...this.props} />
        );
    }
}

