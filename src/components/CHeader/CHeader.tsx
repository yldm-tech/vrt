import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CNavLink } from '@/components/Common/CNavLink/CNavLink';
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { classnames } from 'tailwindcss-classnames';

export const CHeader = (): JSX.Element => {
	return (
		<div className={classnames('fixed', 'bottom-0', 'w-full', 'h-12', 'bg-gray-100')}>
			<div id="content" className={classnames('flex', 'w-full', 'items-center')}>
				<CNavLink to="/home" className={classnames('text-center')}>
					<FontAwesomeIcon icon={faHome} className={classnames('mx-5', 'text-xl', 'block')}/>
					<span className={classnames('text-xs')}>Home</span>
				</CNavLink>
				<CNavLink to="/add" className={classnames('flex-grow', 'text-center')}>
					<FontAwesomeIcon
						icon={faPlus}
						className={classnames('text-5xl', 'rounded-full', 'text-white', 'bg-pink-600', 'p-3')}/>
				</CNavLink>
				<CNavLink to="/task" className={classnames('text-center')}>
					<FontAwesomeIcon icon={faTasks} className={classnames('mx-5', 'text-xl', 'block')}/>
					<span className={classnames('text-xs')}>Task</span>
				</CNavLink>
			</div>
		</div>
	);
};

