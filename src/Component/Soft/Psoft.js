import React from 'react'
import Soft from './Soft';

function Psoft() {

    const com = "Communication";
    const team = "Team Work";
    const ad = "Adaptable";
    const learn = "Quick learner";
    const self = "Self Motivated";
    const ded = "Dedicated";

  return (
    <>
    <div className='mysoft'>  
    <h1>Things which makes me a good manner developer</h1>
     <Soft com={com} style={{backgroundColor:"#32c74f"}}></Soft>
    <div className='soft1'>
      <Soft com={team} style={{backgroundColor:"#ad6cbf"}}></Soft>
      <Soft com={ad} style={{backgroundColor:"#56b494"}}></Soft>
    </div>
    <h2>Soft Skill</h2>
    <div className='soft2'>
      <Soft com={learn} style={{backgroundColor:"#de8c2c"}}></Soft>
      <Soft com={self} style={{backgroundColor:"#307274"}}></Soft>
     </div>
     <Soft com={ded} style={{backgroundColor:" tomato"}}></Soft>
    </div>
    <hr></hr>
    </>
  )
}


export default Psoft
