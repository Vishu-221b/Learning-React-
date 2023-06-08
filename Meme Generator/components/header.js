import React from "react"

export default function Header(){
    return(
        <header>
        
        <div className="logo-div">
        <img className="logo" src = "images/troll-face.png" />
        <h4 className="logo-text">Meme Generator</h4>
        </div>
        
        <div className="title-div">
        <h5 className="title">React Course - Project 3</h5></div>
        </header>
    )
}