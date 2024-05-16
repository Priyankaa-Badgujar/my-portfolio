import logo from './logo.svg';
import './App.css';
import Navfile from './Component/Navfile/Navfile';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Skill from './Component/Skill/Skill';
import Education from './Component/Education/Education';
import Foot from './Component/Footer/Foot';
import Form from './Component/Form';
import Soft from './Component/Soft/Soft';
import Psoft from './Component/Soft/Psoft';
import { Route, Routes,NavLink } from 'react-router-dom';


function App() {

 
  return (
    <div className="App">

<div>
<Navfile/>
  <Routes>
  {/* <Route exact path='/a' element={<About/>}></Route> */}
    <Route exact path='/education' element={<Education/>}></Route>
    <Route exact path='/skill' element={<Skill/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/foot' element={<Foot/>}></Route>
  </Routes>
  </div>
      {/* <Navfile></Navfile> */}
      <About></About> 
      <Education></Education>
      <Skill></Skill>
      <Psoft></Psoft>
      <Contact></Contact> 
      <Foot></Foot>
    </div>
  );
}

export default App;
