import { useTranslation } from 'react-i18next';

import React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { RouteComponentProps } from 'react-router-dom';
import { CButton } from '@/components/Common/CButton';
import { CInput } from '@/components/Common/CInput';

interface Props {
	history: RouteComponentProps['history'];
	location: RouteComponentProps['location'];
	match: RouteComponentProps['match'];
}

const LoginPage = (props: Props): JSX.Element => {

	const login = (username: string, password: string) => {
		console.log(username, password);
		props.history.push('/home');
	};
	const {t, i18n} = useTranslation();
	const lang = i18n.language === 'ja' ? 'en' : 'ja';


	return (
		<div className={classnames('flex', 'justify-center', 'items-center', 'w-screen', 'h-screen', 'bg-gray-100')}>
			<div id="login-container"
				 className={classnames('flex', 'justify-center', 'text-center', 'w-96', 'bg-white')}>
				<div id="login-content">
					<div id="login-title" className={classnames('my-4')}>
						{t('Login')}
					</div>
					<CInput/>
					<CInput type={'password'}/>

					<CButton
						classes={['block', 'w-full', 'h-10', 'bg-red-500', 'text-white', 'my-6']}
						click={() => {
							login('xiaomo', 'xiaomo123');
						}}
					>
						SIGN IN
					</CButton>
					<CButton click={() => i18n.changeLanguage(lang)}>
						{`change to ${lang}`}
					</CButton>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;