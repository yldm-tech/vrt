import React from 'react'
import './App.scss'
import Counter from "@/components/Counter/Counter";
import Book from "@/components/Book/Book";

import AppRouter from '@/components/App/AppRouter'
import Content from '@/layouts/Content/Content'


export default function App() {
    return (
        <div className="App">
            <AppRouter/>
            <Content/>
            <Counter/>
            <Book/>
        </div>
    )
}