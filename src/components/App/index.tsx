import React from 'react';
import './App.scss';
import Counter from '@/components/User';

import AppRouter from '@/components/App/AppRouter';
import Content from '@/layouts/Content';


export default function App() {
    return (
        <div className="App">
            <AppRouter/>
            <Content/>
            <Counter/>
        </div>
    );
}