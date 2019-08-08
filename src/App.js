import React,{Component} from 'react';
import './App.css';
import Menu from './component/header/Menu';
import Myprofile from './component/header/MyProfile';
import About from './component/main/About';
import Education from './component/main/Education';
import Skill from './component/main/Skill';
import Contact from './component/footer/Contact';
import Copyright from './component/footer/Copyright';

class App extends Component {
  render(){
    return (
    <div>
      <Menu/>
      <Myprofile/>
      <About/>
      <Education/>  
      <Skill/>
      <Contact/>
      <Copyright/>
    </div>
  );
}
  };
  

export default App;
