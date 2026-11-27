import { Mail, BookDown } from "lucide-react";
import svger from "../../public/favicon.svg"
import { useEffect, useRef, useState } from "react";
import useInView from "../hook/useInView";
import useRotater from "../hook/useRotater";
function Contents({ bigFunc, smallFunc,visibleFunc }) {
  const ref = useRef(null);
  const refGet = useRef(null);
  const refRes = useRef(null);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [shSkill, setShSkill] = useState('');
  const skills = ["Java Full Stack Developer", "Java Backend Developer", "Junior Software Engineer", "Full Stack Web Developer"]

  useEffect(() => {
    const currentWord = skills[word];
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visibleFunc(entry.isIntersecting);
      }
      else {
        visibleFunc(false);
      }
    }, { threshold: 0.75 })

    if (ref.current) {
      observer.observe(ref.current)
    }
    if (!reverse && word >= skills.length) {
      setWord(0);
      setCount(0);
      return;
    }
    if (!reverse && count < currentWord.length) {
      const time = setTimeout(() => {
        const display = currentWord.slice(0, count + 1);
        setShSkill(display)
        setCount((c) => c + 1);
      }, 85)
      return () => clearTimeout(time);
    }
    if (!reverse && count === currentWord.length) {
      const time2 = setTimeout(() => {
        setReverse(true);
      }, 2000)
      return () => clearTimeout(time2);
    }
    if (reverse && count > 0) {
      const time3 = setTimeout(() => {
        const display = currentWord.slice(0, count - 1);
        setShSkill(display)
        setCount((c) => c - 1)
      }, 30)
      return () => clearTimeout(time3);
    }
    if (reverse && count === 0) {
      setWord(w => w + 1);
      setReverse(false);
      return;
    }
  }
    , [count, word, reverse, isVisible])
      function hoveEnter(e, xRef) {
    const [x, y] = useRotater(xRef, e);
    xRef.current.style.transform = `translate(${y * 10}px, ${x * 10}px)`
  }
  function leaver(e, xRef) {
    xRef.current.style.transform = `translate(0,0)`
  }

  return (
    <div className="contents">
      <h4 ref={ref} className="welcome" ><span className="hand">👋</span> WELCOME TO MY PORTFOLIO</h4>
      <div className="person">
        <h3 className="m-name">HI, I'M </h3>
      </div>
      <div className="my-skill">{shSkill}<span className="slash">/</span></div>
      <div className="devinfo">
        <p>I'm a Java Full Stack Developer passionate
          about building clean, responsive web
          applications from front end to back end.
          I enjoy turning ideas into practical,
          user-friendly solutions using modern technologies
          and continuously improving my development skills.</p>
      </div>
      <div className="twbtn">
        <a ref={refGet} onMouseMove={(e)=>{bigFunc(); hoveEnter(e,refGet)}} onMouseLeave={(e)=>{smallFunc(); leaver(e,refGet)}} className="btn1" id="anchor" href="#getintouch"><Mail size={19} color="#000000" strokeWidth={2.25} />GET IN TOUCH</a>
        <a ref={refRes} onMouseMove={(e)=>{bigFunc(); hoveEnter(e,refRes)}} onMouseLeave={(e)=>{smallFunc(); leaver(e,refRes)}} href="https://drive.google.com/file/d/19PTX_8p0pVtnc_TimGFlSGYg1nHXtHYS/view?usp=sharing"  className="btn2"><BookDown size={19} color="#c8a820" strokeWidth={2.25} />VIEW RESUME<div className="btnover"> </div></a>
      </div>
    </div>

  );
}
export default Contents;