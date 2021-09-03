import React from 'react';
import { classnames, TTailwindString } from 'tailwindcss-classnames';

export interface CButtonProps {
	children: string;
	classes?: TTailwindString;
	click?: () => void;
}

export const CButton = (props: CButtonProps): JSX.Element => {
	const basicClasses = classnames('rounded-2xl', 'border', 'border-solid', 'border-gray-300', 'px-2', 'py-1.5');
	return <button
		onClick={props.click}
		className={classnames(basicClasses, props.classes)}>
		{props.children}
	</button>;
};