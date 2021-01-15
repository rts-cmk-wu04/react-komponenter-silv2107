import React from "react";
import "./readMore.css";

function ReadMore({theBackgroundImage}){
    return (
        <article className="readContainer">
            <img src={theBackgroundImage} alt="background"/>
            <img src="./icon/logo.svg" alt="New york times"/>
            <h4>New York Times</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium excepturi quasi debitis iste modi obcaecati laborum. Sed, magni? Possimus accusamus animi quisquam provident. Qui nihil sit placeat dolor odio?</p>
            <button>READ MORE</button>
        </article>
        )
}

export default ReadMore;