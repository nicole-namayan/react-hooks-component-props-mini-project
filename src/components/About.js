import React from "react";

function About(prop) {
    return(
<aside>
    <img src={prop.image} alt="blog logo"/>
    <p>{prop.about}</p>
</aside>
    )
}

export default About;