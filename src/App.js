import './App.css';
import NavBar from './Components/Navbar';
import Intro from './Components/Intro';
import Experience from './Components/Experience';
import Proficiency from './Components/Proficiency';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';

function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <Experience/>
    <Proficiency/>
    <Education/> <br />
    <Projects/>
    <Certifications/>
    </>
  );
}

export default App;
