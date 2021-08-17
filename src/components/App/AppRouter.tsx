import React from 'react';
import MyNavLink from '@/components/CustomNavLink';

const AppRouter = ():JSX.Element => (
	<div className="container">
		<div>
			<MyNavLink to="/home">home</MyNavLink>
			<MyNavLink to="/task">task</MyNavLink>
		</div>
	</div>
);

export default AppRouter;
