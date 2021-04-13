import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from "react-router";
import NewsDetail from "@/views/Home/News/NewsDetail/NewsDetail";

class News extends Component {
    state = {
        news: [
            {'id': 1, 'title': 'news 1'},
            {'id': 2, 'title': 'news 2'},
            {'id': 3, 'title': 'news 3'},
        ]
    }

    render() {
        const {news} = this.state;
        return (
            <div>
                {news.map((news) => {
                    return <li key={news.id}>
                        <Link to={`/home/news/detail?id=${news.id}`}>{news.title}</Link>
                    </li>
                })
                }
                <Route path='/home/news/detail' component={NewsDetail}/>
            </div>
        );
    }
}

export default News;