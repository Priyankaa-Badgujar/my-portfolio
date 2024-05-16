import React from "react";
import "./About.css";
import newimg from '../../assest/newimg.jpg';
import priyanka from '../../assest/priyanka.pdf';

const About=()=>{
    return(
        <>
        <div className="container-about">
 
         <div className="head">
            <h1><span id="h">H</span>i, <span id="ii">I</span> <span id="a">A</span>m <span id="p">P</span>riyanka <span id="b">B</span>adgujar</h1><br/><br/>
            <h2>I am a passionate web developer with creative mindset</h2><br/>
            <h3><span id="t">T</span>ransforming <span id="d">D</span>igital <span id="dd">D</span>reams <span id="i">i</span>nto <span id="r">R</span>eality</h3><br/><br/>
            <a href={priyanka}  download="priyanka"><button id="resume">Dowload resume</button></a>
         </div>
         <div>
            <a><img src={newimg} alt="" className="myimg"/></a>
         </div>

        </div>
        <hr></hr>
        </>
    )
}

export default About;