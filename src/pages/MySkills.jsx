import UnderLine from '../components/UnderLine'
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import db from "../assets/db.svg"
import java from "../assets/java.svg"
import spring from "../assets/springleaf.svg"
import { useRef } from 'react'
import useInView from '../hook/useInView'
import useRotater from '../hook/useRotater'

function MySkills() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const [isVisible] = useInView(ref, 0.25);
  function hoveEnter(e, xRef) {
    const [x, y] = useRotater(xRef, e);
    const angle = 15;
    xRef.current.classList.add("tilt-is-tracking")
    xRef.current.style.transform = `perspective(1000px) rotateX(${-x * angle}deg) rotateY(${y * angle}deg) translateY(-10px) `
  }
  function leaver(e, xRef) {
    xRef.current.classList.remove("tilt-is-tracking")
    xRef.current.classList.add("tilt")
    xRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`
  }

  return (
    <>
      <div ref={ref} className='padx' >
        <div className={`non ${isVisible ? "mee" : " "}`}>
          <div className='head'>My Skills</div>
          <UnderLine />
          <p className='imtxt'>A comprehensive toolkit for building modern web applications and digital experiences.</p>
        </div>
        <div className='skill-grid'>
          <div ref={ref1} onMouseLeave={(e) => leaver(e, ref1)} onMouseMove={(e) => hoveEnter(e, ref1)} className={`left-move ${isVisible ? "skill-box perspect original-move" : " "}`}>
            <div className="border-wid"></div>
            <div>
              <div className='move-cent shadow3 shad py-4'><img src={react} alt="My skill" /></div>
              <h3 className='pb-3'>Frontend</h3>
              <div className="skill-tags">
                <span className='tag'>REACT</span>
                <span className='tag'>HTML</span>
                <span className='tag'>JAVASCRIPT</span>
                <span className='tag'>CSS</span>
                <span className='tag'>BOOTSTRAP</span>
                <span className='tag'>TailWind</span>
              </div>
            </div>
          </div>

          <div ref={ref2} onMouseLeave={(e) => leaver(e, ref2)} onMouseMove={(e) => hoveEnter(e, ref2)} className={`left-move ${isVisible ? "skill-box perspect original-move2" : " "}`}>
            <div className="border-wid"></div>
            <div>
              <div className='move-cent shadow2 shad py-4 backend'><img src={spring} alt="My skill" /></div>
              <h3 className='pb-3'>Backend</h3>
              <div className="skill-tags">
                <span className='tag'>JAVA</span>
                <span className='tag'>Spring Boot</span>
                <span className='tag'>Spring JPA</span>
                <span className='tag'>Spring security/JWt</span>
                <span className='tag'>Rest Api</span>
                <span className='tag'>Servlet</span>
                <span className='tag'>jsp</span>
                <span className='tag'>JDBC</span>
              </div>
            </div>
          </div>

          <div ref={ref3} onMouseLeave={(e) => leaver(e, ref3)} onMouseMove={(e) => hoveEnter(e, ref3)} className={`left-move ${isVisible ? "skill-box perspect original-move3" : " "}`}>
            <div className="border-wid"></div>
            <div>
              <div className='move-cent tool shadow4 shad py-4'><img src={git} alt="My skill" /></div>
              <h3 className='pb-3'>Tools</h3>
              <div className="skill-tags">
                <span className='tag'>Docker</span>
                <span className='tag'>GIt</span>
                <span className='tag'>github</span>
                <span className='tag'>vs code</span>
                <span className='tag'>intellij</span>
                <span className='tag'>eclipse</span>
                <span className='tag'>postman</span>
                <span className='tag'>MAVEN</span>
              </div>
            </div>
          </div>

          <div ref={ref4} onMouseLeave={(e) => leaver(e, ref4)} onMouseMove={(e) => hoveEnter(e, ref4)} className={`left-move ${isVisible ? "skill-box perspect original-move" : " "}`}>
            <div className="border-wid"></div>
            <div>
              <div className='move-cent java shadow1 shad py-4'><img src={java} alt="My skill" /></div>
              <h3 className='pb-3'>Languages</h3>
              <div className="skill-tags">
                <span className='tag'>JAVA</span>
                <span className='tag'>Sql</span>
                <span className='tag'>HTML</span>
                <span className='tag'>JAVASCRIPT</span>
                <span className='tag'>CSS</span>
              </div>
            </div>
          </div>

          <div ref={ref5} onMouseLeave={(e) => leaver(e, ref5)} onMouseMove={(e) => hoveEnter(e, ref5)} className={`left-move ${isVisible ? "skill-box perspect original-move2" : " "}`}>
            <div className="border-wid"></div>
            <div>
              <div className='blck-wid tool shadow3 shad py-4'><img src={db} alt="My skill" /></div>
              <div>
                <h3 className='pb-3'>Database</h3>
                <div className="skill-tags">
                  <span className='tag'>My Sql</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default MySkills;