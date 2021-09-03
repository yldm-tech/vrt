import React from 'react';
import classNames from 'classnames';

export interface CButtonProps {
	children: string;
	classes?: string[];
	click?: () => void;
}

export const CButton = (props: CButtonProps): JSX.Element => {
	const classes = ['rounded-2xl', 'border', 'border-solid', 'border-gray-300', 'px-2', 'py-1.5'].concat(props.classes ?? []);
	return <button
		onClick={props.click}
		className={classNames((classes))}>
		{props.children}
	</button>;
};