import React from 'react';
import ReactLoading from 'react-loading';
import { classnames, TTailwindString } from 'tailwindcss-classnames';


export interface CPartialLoadingProps {
	type?: undefined,
	color?: string,
	classes?: TTailwindString
}

export const CPartialLoading = (props: CPartialLoadingProps): JSX.Element => {
	const common = classnames('flex', 'w-full', 'items-center', 'justify-center');
	return <div className={classnames(common, props.classes)}>
		<ReactLoading
			type={props.type || 'spokes'}
			color={props.color || 'gray'}
		/>
	</div>;
};