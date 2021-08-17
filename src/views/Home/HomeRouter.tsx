import React from 'react';
import MyNavLink from '@/components/CustomNavLink';

const HomeRouter = ():JSX.Element => (
	<div>
		<MyNavLink to="/home/news">news</MyNavLink>
		<MyNavLink to="/home/posts">posts</MyNavLink>
	</div>
);

export default HomeRouter;
