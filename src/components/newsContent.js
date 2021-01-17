import React from "react";
import "./newsContent.css";

function NewsContent({number, title, theColor,theBorder}){
    return (
        <article className="newsContent">
                <p className="newsContent__number" style={{backgroundColor:`${theColor}`}}>{number}</p>
                <h4 className="newsContent__title">{title}</h4>
                <p className="newsContent__description" style={{borderBottom:`${theBorder}`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, maiores! Ipsum quidem vel aperiam a. Nemo quasi, repudiandae ex sunt saepe consequuntur id debitis incidunt, consectetur quas libero! Dolorum, itaque.</p>
        </article> 
        )
}

export default NewsContent;