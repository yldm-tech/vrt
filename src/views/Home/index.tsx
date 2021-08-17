import React from 'react';
import { Route } from 'react-router-dom';
import News from '@/views/Home/News';
import HomeRouter from '@/views/Home/HomeRouter';
import Posts from '@/views/Home/Posts';

const Home = (): JSX.Element => (
	<>
        Home
		<HomeRouter/>
		<Route component={News} path="/home/news"/>
		<Route component={Posts} path="/home/posts"/>
	</>
);

export default Home;
