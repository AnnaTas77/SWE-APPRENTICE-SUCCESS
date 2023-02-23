import React from "react";
// Import useState here


import "./style.css"
// Import components here



function App() {
    // Create state and fetch function here



    return(
        <div className = "page">
            <h1 id = "title">😻 Meowspace 😻</h1>
            <div className="app">
                <div class = "buttonContainer">
                    <button className = "button">Give me a cat!</button>
                </div>
                <div id = "pictureCard">
                    {/* Render Cat component here */}
                    
                </div>
            </div>
        </div>
        
    )
}

module.exports = App;