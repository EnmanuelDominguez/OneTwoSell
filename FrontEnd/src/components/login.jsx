import React from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import "./style/styles.css"

const login = () => {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <div className="imagen-header">
                    <Link to="/" exact>
                        <img src="https://i.imgur.com/LMSTbbQ.png" alt="" href="/" height="80px"></img>
                    </Link>
                </div>
                <img src="https://i.imgur.com/431dd1j.png" alt="" height="80px"></img>
                <div className="header">
                </div>
            </header>
        </div>
        </Router>    
    )
}

export default login