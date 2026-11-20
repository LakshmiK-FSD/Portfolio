import './App.css'
import Header from './components/Header'
import Contents from './pages/Contents'
import Profile from './pages/Profile'
import AboutMe from './pages/AboutMe'
import MySkills from './pages/MySkills'
import Projects from './pages/Projects'
import MyCertifications from './pages/MyCertifications'
import GetinTouch from './pages/GetinTouch'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [sepVisible, setSepVisible] = useState(false);
  const arrowRef = useRef(null);
  const dotRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  useEffect(

    () => {
      function mouseFollow(e) {
        if (!(e)) return;
        setX(e.clientX)
        setY(e.clientY)
        setX2(e.clientX)
        setY2(e.clientY)
      }

      window.addEventListener("mousedown", () => clicking());
      window.addEventListener("mouseup", () => leaving());
      window.addEventListener("mousemove", (e) => mouseFollow(e));
      if (arrowRef.current) {
        dotRef.current.style.transform = `translate(${x}px,${y}px)`
        arrowRef.current.style.transform = `translate(${x2}px,${y2}px)`

      }
      
    }

  )
  function clicking() {
    arrowRef.current.classList.remove("mouse-round-extra");
    arrowRef.current.classList.remove("mouse-round");
    arrowRef.current.classList.add("mouse-round-tinny");
  }
  function entering() {
    arrowRef.current.classList.remove("mouse-round-tinny");
    arrowRef.current.classList.remove("mouse-round");
    arrowRef.current.classList.add("mouse-round-extra");

  }
  function leaving() {
    arrowRef.current.classList.remove("mouse-round-tinny");
    arrowRef.current.classList.remove("mouse-round-extra");
    arrowRef.current.classList.add("mouse-round");
  }
  return (
    <><div className='portfoliobg'>
      <Header headBar={sepVisible} bigFunc={entering} smallFunc={leaving} />
      <div id="content" className='boxdetail' ><Contents visibleFunc={setSepVisible} bigFunc={entering} smallFunc={leaving} /><Profile /></div>
      <div id="aboutme" className="aboutme"><AboutMe /></div>
      <div id="myskills" className="myskills"><MySkills /></div>
      <div id="projects" className="projects"><Projects bigFunc={entering} smallFunc={leaving} /></div>
      <div id="mycertificat" className="projects"><MyCertifications /></div>
      <div id="getintouch" className="projects getin"><GetinTouch bigFunc={entering} smallFunc={leaving} /></div>
      <div className="footer-contain"><Footer /></div>
      <div ref={arrowRef} className="mouse-round"></div>
      <div ref={dotRef} className="mouse-dot"></div>
    </div>
    </>
  )
}

export default App
