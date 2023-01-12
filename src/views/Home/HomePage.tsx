import React from 'react';
import { CHeader } from '@/components/CHeader/CHeader';

const Home = (): JSX.Element => (
	<div>
		<CHeader/>
		<h1 className="text-3xl font-bold underline">
			Hello world!
		</h1>
	</div>
);

export default Home;
