import React from "react";

function Latest({children}){
    return (
        <section className={latest}>
            <h4>Latest News</h4>
            {children}
            <p>More news</p>
        </section>

    )
}

export default Latest;