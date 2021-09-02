import React from 'react';
import { CNavLink } from '@/components/common/CNavLink';

const HomeRouter = (): JSX.Element => (
	<div>
		<CNavLink to="/home/news">news</CNavLink>
		<CNavLink to="/home/posts">posts</CNavLink>
	</div>
);

export default HomeRouter;
