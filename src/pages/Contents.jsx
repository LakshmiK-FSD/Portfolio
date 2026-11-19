import { Mail, BookDown } from "lucide-react";
import svger from "../../public/favicon.svg"
import { useEffect, useState } from "react";
function Contents({ bigFunc, smallFunc }) {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [shSkill, setShSkill] = useState('');
  const skills = ["Java Full Stack Developer", "Java Backend Developer", "Junior Software Engineer", "Full Stack Web Developer"]
  useEffect(() => {
    const currentWord = skills[word];

    if (!reverse && word >= skills.length) {
      setWord(0);
      setCount(0);
      return;
    }
    if (!reverse && count < currentWord.length) {
      const time = setTimeout(() => {
        const display = currentWord.slice(0, count+1);
        setShSkill(display)
        setCount((c) => c + 1);
      }, 80)
      return () => clearTimeout(time);
    }
    if (!reverse && count === currentWord.length) {
      const time2 = setTimeout(() => {
       setReverse(true);
      }, 2000)
      return () => clearTimeout(time2);
    }
    if ( reverse && count >0) {
      const time3 = setTimeout(() => {
        const display = currentWord.slice(0, count-1);
        setShSkill(display)
        setCount((c) => c - 1)
      }, 40)
      return () => clearTimeout(time3);
    }
    if (reverse && count === 0) {
      setWord(w=>w+1);
      setReverse(false);
      return ;
    }
  }
    , [count, word,reverse])
  return (
    <div className="contents">
      <h4>👋 WELCOME TO MY PORTFOLIO</h4>
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
        <a onMouseMove={bigFunc} onMouseLeave={smallFunc} className="btn1" id="anchor" href="#getintouch"><Mail size={19} color="#000000" strokeWidth={2.25} />GET IN TOUCH</a>
        <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href={svger} download={"my.svg"} className="btn2"><BookDown size={19} color="#c8a820" strokeWidth={2.25} />VIEW RESUME<div className="btnover"> </div></a>
      </div>
    </div>

  );
}
export default Contents;