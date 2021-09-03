import React from 'react';
import { Route } from 'react-router-dom';
import { CNavLink } from '@/components/Common/CNavLink/CNavLink';
import Task from '@/views/Task/TaskPage';
import { CHeader } from '@/components/CHeader/CHeader';

const Home = (): JSX.Element => (
	<div>
		Home
		<CHeader/>
	</div>
);

export default Home;
