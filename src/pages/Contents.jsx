import { Mail, BookDown } from "lucide-react";
import svger from "../../public/favicon.svg"
function Contents({ bigFunc, smallFunc }) {
  return (

    <div className="contents">
      <h4>👋 WELCOME TO MY PORTFOLIO</h4>
      <div className="person">
        <h3 className="m-name">HI, I'M </h3>
      </div>
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