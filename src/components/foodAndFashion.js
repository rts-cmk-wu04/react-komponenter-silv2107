import React from "react";

function FAndF({imgFit, title, description}){
    return (
        <article>
            <img src={imgFit} alt="img that fits"/>
            <h5>{title}</h5>
            <p>{description}</p>
        </article>
        )
}

export default FAndF;