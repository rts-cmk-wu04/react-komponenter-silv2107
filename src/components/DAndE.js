import React from "react";
import "./DAndE.css";

function DAndE({iconTheme, title}){
    return (
        <article className="design">
            <img src={iconTheme} alt="icon"/>
            <h2>{title}</h2>
        </article>
        )
}

export default DAndE;