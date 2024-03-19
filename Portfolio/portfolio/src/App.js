import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Nav from "./components/nav/Nav"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Education from "./components/education/Education"
import Skill from "./components/skill/Skill"
function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Projects/>
    <Education/>
    <Skill/>
    </>
  );
}

export default App;
