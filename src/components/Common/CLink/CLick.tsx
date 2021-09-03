import React from 'react';
import classNames from 'classnames';

export interface CLinkProps {
	children: string;
	classes?: string[];
	url: string;
	hasBorder: boolean;
	newWindow: boolean;
}

export const CLink = (props: CLinkProps): JSX.Element => {
	const borderClasses = ['border', 'border-solid', 'border-gray-300'];
	let classes = ['rounded-2xl', 'text-sm', 'px-2', 'py-1.5', 'no-underline']
		.concat(props.classes ?? []);
	if (props.hasBorder) {
		classes = classes.concat(borderClasses);
	}
	return <a
		href={props.url}
		target={props.newWindow ? '_blank' : '_self'}
		className={classNames((classes))} rel="noreferrer">
		{props.children}
	</a>;
};

CLink.defaultProps = {
	newWindow: true,
	hasBorder: false
};