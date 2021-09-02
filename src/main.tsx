import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import '@/i18n';
import { CFullLoading } from '@/components/common/CFullLoading';
import { Route } from 'react-router';

const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));


const App = (): JSX.Element => {
	return (
		<div className="App">
			<Suspense fallback={<CFullLoading/>}>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/home" component={Home}/>
					<Route path="/login" component={Login}/>
					<Redirect to="/404"/>
				</Switch>
			</Suspense>
		</div>
	);
};


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
