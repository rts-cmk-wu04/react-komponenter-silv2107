import React from "react";

function Collections({category, imgMain, imgRound, title, author}){
    return (
        <article>
            <h4>{category}</h4>
            <img src={imgMain} alt="collection background"/>
            <img src={imgRound} alt="collection profile"/>
            <h2>{title}</h2>
            <p>{author}</p>
        </article>
        )
}

export default Collections;