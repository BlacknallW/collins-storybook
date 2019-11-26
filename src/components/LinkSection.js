import React from "react";
import "./components.css";

const LinkSection = props => {
return (
    <div>
        <h1 className="linkTitle">{props.header}</h1>
        <hr/>
        <a href="/"><p>{props.text}</p></a>
        <a href="/"><p>{props.text}</p></a>
        <a href="/"><p>{props.text}</p></a>
        <a href="/"><p>{props.text}</p></a>
        <a href="/"><p>{props.text}</p></a>
    </div>
)
}

export default LinkSection