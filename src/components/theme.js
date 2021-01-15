import React from "react";
import "./theme.css";
function Theme({imgBackground, title, description,colorTitle}){
    return (
        <article className="theme">
           <img className="theme__img" src={imgBackground} alt="background"/>
           <section className="theme__content">
            <h4 style={{color:`${colorTitle}`}}>{title}</h4>
            <p className="theme__description">{description}</p>
           </section>
        </article>
        )
}

export default Theme;