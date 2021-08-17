import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Redirect, Switch } from 'react-router-dom';
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/views/Home'));
const Task = lazy(() => import('@/views/Task'));
const NotFound = lazy(() => import('@/views/NotFound'));
export const Content = (): JSX.Element => (
	<Suspense fallback={<Loading/>}>
		<Switch>
			<Route component={Home} path="/home"/>
			<Route component={Task} path="/task"/>
			<Route component={NotFound} path="/404"/>
			<Redirect to="/404"/>
		</Switch>
	</Suspense>
);

export default Content;
