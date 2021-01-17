import React from "react";
import "./readMore.css";

function ReadMore({theBackgroundImage}){
    return (
        <article className="readContainer">
            <img className="readContainer__background" src={theBackgroundImage} alt="background"/>
            <img className="readContainer__logo" src="./icon/logo.svg" alt="New york times"/>
            <h4 className="readContainer__title">New York Times</h4>
            <p className="readContainer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium excepturi quasi debitis iste modi obcaecati laborum. Sed, magni? Possimus accusamus animi quisquam provident. Qui nihil sit placeat dolor odio?</p>
            <button className="readContainer__button">READ MORE</button>
        </article>
        )
}

export default ReadMore;