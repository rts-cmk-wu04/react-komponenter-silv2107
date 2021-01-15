import React from "react";
import "./serviceContainer.css"

function Services({ icon, title, description, theBackground }){
    return (
        <article className="serviceContainer" style={{backgroundColor:`${theBackground}`}}>
            <img src={icon} alt="an icon"/>
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    )
}

export default Services;