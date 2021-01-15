import React from "react";
import "./outdoor.css";

function Outdoor({ imgBig, title, category, description, img1, img2, img3 }){
    return (
        <article className="outdoor">
            <img className="outdoor__image" src={imgBig} alt="an icon"/>
            <h2 className="outdoor__title">{title}</h2>
            <h4 className="outdoor__leisure">{category}</h4>
            <p className="outdoor__description">{description}</p>
            <div className="outdoor__icons">
                <img src={img1} alt="an icon"/>
                <img src={img2} alt="an icon"/>
                <img src={img3} alt="an icon"/>
            </div>
        </article>
    )
}

export default Outdoor;