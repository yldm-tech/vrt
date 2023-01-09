import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import '@/assets/styles/index.css';

import '@/i18n';
import { CFullLoading } from '@/components/Common/CFullLoading';
import { Route } from 'react-router';
import NotFound from '@/views/NotFound';

const Home = lazy(() => import('@/views/Home'));
const Task = lazy(() => import('@/views/Task'));
const Add = lazy(() => import('@/views/Add'));
const Login = lazy(() => import('@/views/Login'));


const App = (): JSX.Element => {
	return (
		<Suspense fallback={<CFullLoading/>}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/home" element={<Home/>}/>
					<Route path="/task" element={<Task/>}/>
					<Route path="/add" element={<Add/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/404" element={<NotFound/>}/>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};


const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<React.StrictMode>
	<Provider store={store}>
		<App/>
	</Provider>
</React.StrictMode>);