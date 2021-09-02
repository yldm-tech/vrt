import React from 'react';
import ReactLoading from 'react-loading';
import classNames from 'classnames';

interface LoadingProps {
	type?: undefined,
	color?: string,
	classes?: string[]
}

export const CPartialLoading = (props: LoadingProps): JSX.Element => {
	const common = ['flex', 'w-full', 'items-center', 'justify-center'];
	const styles = common.concat(props.classes || []);
	return <div className={classNames(styles)}>
		<ReactLoading
			type={props.type || 'spokes'}
			color={props.color || 'gray'}
		/>
	</div>;
};