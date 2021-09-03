import React from 'react';
import ReactLoading from 'react-loading';
import classNames from 'classnames';

export const CFullLoading = (): JSX.Element => {
	const classes = classNames('bg-black', 'w-screen', 'h-screen', 'flex', 'items-center', 'justify-center');
	return (
		<div className={classes}>
			<ReactLoading
				type={'bars'}
				color={'purple'}
				width={150}
				height={150}/>
		</div>
	);
};


