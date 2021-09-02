import React from 'react';
import classNames from 'classnames';

interface Props {
	classes?: string[];
	type: string;
}

export const CInput = (props: Props): JSX.Element => {
	const classes = ['w-10/12', 'h-4','m-2', 'p-2', 'border-b', 'border-t-0', 'border-l-0', 'border-r-0'].concat(props.classes || []);
	return (
		<input type={props.type} className={classNames(classes)}/>
	);
};

CInput.defaultProps = {
	type: 'text'
};