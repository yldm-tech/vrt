import React from 'react'
import './App.scss'
import Counter from "@/components/Counter/Counter";
import Book from "@/components/Book/Book";


export default function App() {
    return (
        <div className="App">
            <Counter/>
            <Book/>
        </div>
    )
}