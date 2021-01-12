import React from "react";

function Outdoor({ imgBig, title, category, description, img1, img2, img3 }){
    return (
        <article style={{backgroundColor: "grey"}}>
            <img src={imgBig} alt="an icon"/>
            <h2>{title}</h2>
            <h4>{category}</h4>
            <p>{description}</p>
            <img src={img1} alt="an icon"/>
            <img src={img2} alt="an icon"/>
            <img src={img3} alt="an icon"/>
        </article>
    )
}

export default Outdoor;