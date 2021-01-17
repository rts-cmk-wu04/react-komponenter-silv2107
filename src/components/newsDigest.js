import React from "react";
import "./newsDigest.css";

function NewsDigest({children}){
    return (
        <section className="newsDigest">
            <h4 className="newsDigest__news"> News Digest</h4>
            {children}
        </section>

    )
}

export default NewsDigest;