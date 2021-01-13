import React from "react";

function LatestContent({imgLatest, title, description}){
    return (
        <article style={{backgroundColor: "grey"}}>
                <img src={imgLatest} alt="latest img"/>
                <h5>{title}</h5>
                <p>{description}</p>
        </article> 
        )
}

export default LatestContent;