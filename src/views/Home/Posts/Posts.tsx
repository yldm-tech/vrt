import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from "react-router";
import NewsDetail from "@/views/Home/News/NewsDetail/NewsDetail";
import PostsDetail from "@/views/Home/Posts/PostsDetail/PostsDetail";

class Posts extends Component {
    state = {
        posts: [
            {'id': 1, 'title': 'posts 1'},
            {'id': 2, 'title': 'posts 2'},
            {'id': 3, 'title': 'posts 3'},
        ]
    }

    render() {
        const {posts} = this.state;

        return (
            <div>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to=
                                  {{
                                      pathname: '/home/posts/detail',
                                      state: {id: post.id, title: post.title}
                                  }}
                        >
                            {post.title}
                        </Link>
                    </li>
                })
                }
                <Route path='/home/posts/detail' component={PostsDetail}/>
            </div>
        );
    }
}

export default Posts;