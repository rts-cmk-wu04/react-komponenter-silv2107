import React from "react";

function Latest({children}){
    return (
        <section>
            <h4>Latest News</h4>
            {children}

            {/* <article style={{backgroundColor: "grey"}}>
                <img src={imgLatest} alt="latest img"/>
                <h5>{title}</h5>
                <p>{description}</p>
            </article> */}
            <p>More news</p>
        </section>

    )
}

export default Latest;