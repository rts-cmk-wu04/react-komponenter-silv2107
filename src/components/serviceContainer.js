import React from "react";

function Services({ icon, title, description }){
    return (
        <article style={{backgroundColor: "grey"}}>
            <img src={icon} alt="an icon"/>
            <h4>{title}</h4>
            <p>{description}</p>
        </article>
    )
}

export default Services;