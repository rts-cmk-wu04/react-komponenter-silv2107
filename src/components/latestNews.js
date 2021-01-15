import React from "react";
import "./latestNews.css";

function Latest({children}){
    return (
        <section className="latestNews">
            <h4 className="latestNews__title">Latest News</h4>
            {children}
            <p className="latestNews__text">More news</p>
        </section>

    )
}

export default Latest;