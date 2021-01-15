import React from "react";
import "./placesToSee.css";

function Places(){
    return (
        <article className="places">
            <img className="places__logo" src="./icon/logo.svg" alt="logo"/>
            <h4 className="places__title">New York Times</h4>
            <img className="places__background" src="./images/imgBackground.png" alt="background"/>
            <img className="places__heart" src="./icon/Heart.svg" alt="heart icon"/>
            <h2 className="places__secondTitle">MUST SEE PLACES FOR SUMMER</h2>
            <p className="places__description">Everything is unfortunatly closed due to coronavirus</p>
            <div className="places__symbols">_ _ _</div>
        </article>
        )
}

export default Places;