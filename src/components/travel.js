import React from "react";

function Travel({ image, category, title, description }){
    return (
        <article style={{backgroundColor: "grey"}}>
            <img src={image} alt="an icon"/>
            <h4>{category}</h4>
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

export default Travel;