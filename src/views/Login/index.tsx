import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = (): JSX.Element => {
	const {t, i18n} = useTranslation();
	const lang = i18n.language === 'ja' ? 'en' : 'ja';
	return (
		<div>
			Task
			<div>
				<button type="button" onClick={() => i18n.changeLanguage(lang)}>
					change to {lang}
				</button>
			</div>
			{t('home')}
		</div>
	);
};

export default Login;
