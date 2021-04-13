import React, { useState } from 'react'
import './App.scss'

import AppRouter from '@/components/App/AppRouter'
import Content from '@/layouts/Content/Content'


export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <AppRouter/>
            <Content/>
        </div>
    )
}