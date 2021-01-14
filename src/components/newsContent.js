import React from "react";

function NewsContent({number, title}){
    return (
        <article style={{backgroundColor: "grey"}}>
                <div><p>{number}</p></div>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, maiores! Ipsum quidem vel aperiam a. Nemo quasi, repudiandae ex sunt saepe consequuntur id debitis incidunt, consectetur quas libero! Dolorum, itaque.</p>
        </article> 
        )
}

export default NewsContent;