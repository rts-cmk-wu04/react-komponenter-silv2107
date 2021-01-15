import React from "react";
import "./latestContent.css";

function LatestContent({imgLatest, title, description, colorTitle}){
    return (
        <article className="latestContent">
                <img className="latestContent__img" src={imgLatest} alt="latest img"/>
                <section className="latestContent__content">
                        <h5 style={{color:`${colorTitle}`}}>{title}</h5>
                        <p>{description}</p>
                </section>
        </article> 
        )
}

export default LatestContent;