import React from "react";
import "./travel.css";

function Travel({ image, category, title, description }){
    return (
        <article className="travel">
            <img className="travel_img" src={image} alt="an icon"/>
            <h4 className="travel__category">{category}</h4>
            <h2 className="travel__title">{title}</h2>
            <p className="travel__text">{description}</p>
        </article>
    )
}

export default Travel;