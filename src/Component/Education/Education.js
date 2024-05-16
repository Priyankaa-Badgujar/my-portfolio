import React from 'react';
import './education.css';

function Education() {
    const edu =[{
        name : `Master in computer application`,
        cname : `Patel Institute Of Science And Technology,RGPV Bhopal (2023-2025)`,
        city : 'Indore'
    },
    {
        name : `Bacholer in computer science`,
        cname : 'P.M.B. Gujrati Science College,DAVV Indore (2018-2021)',
        city : `Indore`
    },
    {
        name : `Higher Secondary School`,
        cname : 'Vidhya Childern Academy High Secondary School ,M.P. Board (2018)',
        city : `Indore`
    }
]
  return (<>
    <div className='container-edu'>
      <h1>Education</h1>
      {
        edu.map((item,i)=>
        <div className='myedu'>
        <a>
        <p className='main'>{item.name}</p>
        <p>{item.cname}</p>
        <p>{item.city}</p>
        </a>
      </div>)
      
      }
     
    </div>
    <hr></hr>
    </>
  )
}

export default Education
