import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import PostsDetail from '@/views/Home/Posts/PostsDetail';

const Posts = ():JSX.Element => {
	const [posts] = useState([
		{id: 1, title: 'posts 1'},
		{id: 2, title: 'posts 2'},
		{id: 3, title: 'posts 3'},
	]);

	return (
		<div>
			{posts.map((post) => (
				<li key={post.id}>
					<Link
						to={{
							pathname: '/home/posts/detail',
							state: {id: post.id, title: post.title},
						}}
					>
						{post.title}
					</Link>
				</li>
			))}
			<Route component={PostsDetail} path="/home/posts/detail"/>
		</div>
	);
};

export default Posts;
