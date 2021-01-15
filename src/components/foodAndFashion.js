import React from "react";
import "./foodAndFashion.css";

function FAndF({imgFit, title, description, colorTitle}){
    return (
        <article className="FAndF">
            <img className="FAndF__img" src={imgFit} alt="img that fits"/>
            <section className="FAndF__content">
                <h5 style={{color:`${colorTitle}`}}>{title}</h5>
                <p>{description}</p>
            </section>
        </article>
        )
}

export default FAndF;