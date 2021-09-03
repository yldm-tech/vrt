import React from 'react';
import { classnames, TTailwindString } from 'tailwindcss-classnames';

interface Props {
	classes?: TTailwindString;
	type: string;
	autofocus: boolean;
}

export const CInput = (props: Props): JSX.Element => {
	const classes = classnames('w-10/12', 'h-4', 'm-2', 'p-2', 'border-b', 'border-t-0', 'border-l-0', 'border-r-0');
	return (
		<input type={props.type} autoFocus={props.autofocus} className={classnames(classes, props.classes)}/>
	);
};

CInput.defaultProps = {
	type: 'text',
	autofocus: false,
};