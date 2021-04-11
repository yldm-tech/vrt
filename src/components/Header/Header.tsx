import React, { Component } from 'react';
import { createHashHistory, createBrowserHistory, createMemoryHistory } from "history";
import { HashRouter } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    historyAPI(path) {
        let history = createHashHistory(); // 带锚点的url，兼容性好
        history = createMemoryHistory();  // 浏览器没有什么变化，存在内存中
        history = createBrowserHistory(); // 浏览器自带的模式
        history.push(path);  // 往栈压入一个新路由
        history.replace(path); // 替换当前路由
        history.go(path);  // 跳到指定路由
        history.goBack();  // 返回上一层路由,replace会对它有影响
        history.goForward(); // 跳到下一个路由，前提是执行过goBack
        history.listen((location) => console.log(location)); // 路由变化时触发
    }


    render() {
        return (
            <div>
                <HashRouter/>
            </div>
        );
    }
}
