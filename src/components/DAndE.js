import React from "react";

function DAndE({iconTheme, title}){
    return (
        <article>
            <img src={iconTheme} alt="icon"/>
            <h2>{title}</h2>
        </article>
        )
}

export default DAndE;