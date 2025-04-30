import React, { useState } from 'react'
import './ImageComp.css'
function ImageComp() {
    var [img, setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s");
    var [title, setTitle] = useState("React js");

    const changeToReact = () => {
        setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s");
        setTitle("React js");
    }
    const changeToAngular = () => {
        setImg("https://miro.medium.com/v2/resize:fit:1400/1*cGDDA2mfYkjiIhGaN8gDoA.png");
        setTitle("Angular js");
    }
    return (
        <div id='ImageComp'>
            <h1>{title}</h1>
            <img src={img} width="400" height="300" alt="" />
            <br /><br />
            <button onClick={changeToReact}>React</button>
            <button onClick={changeToAngular}>Angular</button>
        </div>
    )
}
export default ImageComp  