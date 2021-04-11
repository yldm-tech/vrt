import React, { useState } from 'react'
import './App.scss'

import Menu from '@/layouts/Menu/Menu'
import Content from '@/layouts/Content/Content'


export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Menu/>
            <Content/>
        </div>
    )
}