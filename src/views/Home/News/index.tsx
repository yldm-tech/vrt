import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import NewsDetail from '@/views/Home/News/NewsDetail';

const News = ():JSX.Element => {
	const [newsList] = useState([
		{ id: 1, title: 'newsList 1' },
		{ id: 2, title: 'newsList 2' },
		{ id: 3, title: 'newsList 3' },
	]);
	return (
		<div>
			{newsList.map((news) => (
				<li key={news.id}>
					<Link to={`/home/news/detail?id=${news.id}`}>{news.title}</Link>
				</li>
			))}
			<Route component={NewsDetail} path="/home/news/detail" />
		</div>
	);
};

export default News;
