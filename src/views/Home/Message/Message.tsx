import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router";
import MessageDetail from "@/views/Home/Message/MessageDetail/MessageDetail";

export default class Message extends Component {
    state = {
        messages: [
            {'id': 1, 'title': 'message 1'},
            {'id': 2, 'title': 'message 2'},
            {'id': 3, 'title': 'message 3'},
        ]
    }

    render() {
        const {messages} = this.state;
        return (
            <div>
                {messages.map((msg) => {
                    return <li key={msg.id}>
                        <Link to={`/home/message/detail/${msg.id}`}>{msg.title}</Link>
                    </li>
                })
                }
                <Route path='/home/message/detail/:id' component={MessageDetail}/>
            </div>
        );
    }
}
