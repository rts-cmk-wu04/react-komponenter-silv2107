import React from "react";
import "./theme2.css";
function Theme2({imgBackground, title, description}){
    return (
        <article className="theme2">
           <img className="theme2__img" src={imgBackground} alt="background"/>
           <section className="theme2__content">
            <h4 style={{color:"white"}}>{title}</h4>
            <p className="theme2__description">{description}</p>
           </section>
        </article>
        )
}

export default Theme2;