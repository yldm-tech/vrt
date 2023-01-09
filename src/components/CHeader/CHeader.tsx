import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CNavLink } from '@/components/Common/CNavLink/CNavLink';
import { faHome, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';

export const CHeader = (): JSX.Element => {
	return (
		<div>
			<div id="content" className="flex w-full items-center">
				<CNavLink to="/home" className="text-center">
					<FontAwesomeIcon icon={faHome} className="mx-5 text-xl block"/>
					<span className="text-xs">Home</span>
				</CNavLink>
				<CNavLink to="/add" className="flex-grow text-center">
					<FontAwesomeIcon
						icon={faPlus}
						className="text-5xl rounded-full text-white bg-pink-600 p-3"/>
				</CNavLink>
				<CNavLink to="/task" className="text-center">
					<FontAwesomeIcon icon={faTasks} className="mx-5 text-xl block"/>
					<span className="text-xs">Task</span>
				</CNavLink>
			</div>
		</div>
	);
};

