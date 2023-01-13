import { useTranslation } from 'react-i18next';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CButton } from '@/components/Common/CButton';
import { CInput } from '@/components/Common/CInput';


const LoginPage = (): JSX.Element => {
    const navigate = useNavigate();
    const login = (username: string, password: string) => {
        console.log(username, password);
        navigate('/home');
    };
    const {t, i18n} = useTranslation();
    const lang = i18n.language === 'ja' ? 'en' : 'ja';


    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
        <div id="login-container"
    className="flex justify-center text-center w-96 bg-white">
    <div id="login-content">
    <div id="login-title" className="my-4">
        {t('Login')}
    </div>
    <CInput/>
    <CInput type={'password'}/>

    <CButton
    classes='block w-full h-10 bg-red-500 text-white my-6'
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