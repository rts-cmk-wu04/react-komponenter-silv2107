import React from "react";
import "./DAndE.css";

function DAndE({iconTheme, title,theBackground}){
    return (
        <article style={{backgroundColor:`${theBackground}`}} className="design">
            <div  className="design__wrapper">
                <img  src={iconTheme} alt="icon"/>
                <h2>{title}</h2>
            </div>
        </article>
        )
}

export default DAndE;