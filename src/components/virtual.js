import React from "react";
import "./virtual.css";

function Virtual(){
    return (
        <article className="virtual">
           <h2 className="virtual__title">Virtual Reality</h2>
           <img className="virtual__booksmark" src="./icon/bookmark.svg" alt="bookmark"/>
           <img className="virtual__img" src="./images/virtual.png" alt="virtual reality"/>
           <h4 className="virtual__tech">TECHNOLOGY</h4>
        </article>
        )
}

export default Virtual;