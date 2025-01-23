import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./features/home/Home"

function App() {
    return ( 
        <HashRouter>
            <Navigation />
            <Home />
        </HashRouter>
        
    )
}

export default App;