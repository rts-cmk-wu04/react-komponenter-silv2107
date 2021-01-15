import React from "react";
import "./collections.css";

function Collections({category, imgMain, imgRound, title, author}){
    return (
        <article className="collections">
            <h4 className="collections__category">{category}</h4>
            <img className="collections__background" src={imgMain} alt="collection background"/>
            <img className="collections__profil" src={imgRound} alt="collection profile"/>
            <article className="collections__author">
                <h2>{title}</h2>
                <p>{author}</p>
            </article>
        </article>
        )
}

export default Collections;