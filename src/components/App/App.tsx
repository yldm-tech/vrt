import React, { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import './App.scss'
import { LoginComponent } from '../Login/Login'


export default function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <LoginComponent />
        </div>
    )
}