import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './skill.css'
import css from '../../assest/css.jpg';
import html from '../../assest/html.png';
import js from '../../assest/js.png';
import mongo from '../../assest/mongo.png';
import node from '../../assest/node.png';
import react from '../../assest/react.png';

const Skill=()=>{
    return(
        <>

<Container>
    <div className="contskill">
    <h1>Technologies i used as a web developer</h1>
    <a><div className="html">
       <img src={html}/>
    </div></a>
    <div className="set1">
    <div className="css">
        <img src={css}/>
    </div>
    <div className="js">
        <img src={js}/>
    </div>
    </div>

    <div className="center">
        <h1>My skills</h1>
    </div>
    <div className="set2">
    <div className="react">
        <img src={react}/>
    </div>
   
    <div className="node">
        <img src={node}/>
    </div>
    </div>
    <div className="mongo">
        <img src={mongo}/>
    </div>
    
    </div>
</Container>
<hr></hr>
        </>
    )
}


export default Skill;