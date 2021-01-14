import React from "react";

function Theme({imgBackground, title, description}){
    return (
        <article>
           <img src={imgBackground} alt="background"/>
           <h4>{title}</h4>
           <p>{description}</p>
        </article>
        )
}

export default Theme;