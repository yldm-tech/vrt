import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CNavLink } from '@/components/common/CNavLink';
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';

export const CHeader = (): JSX.Element => {
	return (
		<div className={classNames('fixed', 'bottom-0', 'w-full', 'h-12', 'bg-gray-100')}>
			<div id="content" className={classNames('flex', 'w-full', 'items-center')}>
				<CNavLink to="/home" className={classNames('text-center')}>
					<FontAwesomeIcon icon={faHome} className={classNames('mx-5', 'text-xl', 'block')}/>
					<span className={classNames('text-xs')}>Home</span>
				</CNavLink>
				<CNavLink to="/add" className={classNames('flex-grow', 'text-center')}>
					<FontAwesomeIcon
						icon={faPlus}
						className={classNames('text-5xl', 'rounded-full', 'text-white', 'bg-pink-600', 'p-3')}/>
				</CNavLink>
				<CNavLink to="/task" className={classNames('text-center')}>
					<FontAwesomeIcon icon={faTasks} className={classNames('mx-5', 'text-xl', 'block')}/>
					<span className={classNames('text-xs')}>Task</span>
				</CNavLink>
			</div>
		</div>
	);
};

