import React from 'react';
import { Route } from 'react-router-dom';
import { CNavLink } from '@/components/common/CNavLink';
import Task from '@/views/Task';
import { CHeader } from '@/layouts/Header';

const Home = (): JSX.Element => (
	<div>
		Home
		<CHeader/>
	</div>
);

export default Home;
