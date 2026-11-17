import { useRef } from "react";
import UnderLine from "../components/UnderLine";
import { Calendar, Compass, BookOpen, CircuitBoard, GlobeCode } from "lucide-react";
import useInView from "../hook/useInView";
import useRotater from "../hook/useRotater";
function MyCertifications() {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const [isVisible] = useInView(ref,0.25);
        function hoveEnter(e,xRef){
       const [x,y] = useRotater(xRef,e);
       const angle = 9;
        xRef.current.classList.add("tilt-is-tracking")
        xRef.current.classList.add("shadow-f")
        xRef.current.style.transform=`perspective(1000px) rotateX(${-x*angle}deg) rotateY(${y*angle}deg)`
    }
    function leaver(e,xRef){
         xRef.current.classList.remove("tilt-is-tracking")
         xRef.current.classList.add("tilt")
         
         xRef.current.style.transform=`perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`
    }
    return (
        <>
            <div ref={ref}>
                <div className={`non ${isVisible?"head":" "}`}>
                <div className="head">My Certifications</div>
                <UnderLine />
                <p className='imtxt'>Professional certifications and achievements that validate my expertise and commitment to continuous learning.</p>
                </div>
                <div className="cert-grid">
                    <div ref={ref1} onMouseLeave={(e)=>leaver(e,ref1)} onMouseMove={(e)=>hoveEnter(e,ref1)} className={`left-move ${isVisible?'original-move backd inline-pad':" "}`}>
                        <div className="flexro">
                            <div className="yellow-box">
                                <GlobeCode size={18} color="#000000" strokeWidth={2.25} />
                            </div>
                            <div className="px-4">
                                <h2 className="certificat-tittle">Java Full Stack Developer</h2>
                                <p className="certificat-provider">Fita</p>
                            </div>
                        </div>
                        <div className="flexro jstbtw py-3">
                            <div className="flexro aligner" >
                                <Calendar size={14} color="#666666" strokeWidth={1.25} />
                                <div style={{ paddingLeft: "5px" }} className="txt-mut">Oct 2026</div>
                            </div>
                            <div className="completed compleextra flexro">
                                <span className="dot"></span>Completed</div>
                        </div>
                        <div className="txt-sec">Comprehensive certification in full-stack
                            development with Java, Spring Boot, SQL/MySQL, React, and modern web technologies,
                            where I built small web applications by connecting front-end pages with back-end APIs,
                            and I practiced database operations and debugging the applications I created.</div>
                        <div className="bottom">
                            <div className="skill-tags" >
                                <span className='tag'>JAVA</span>
                                <span className='tag'>JDBC</span>
                                <span className='tag'>JAVA Servlet</span>
                                <span className='tag'>JSP</span>
                                <span className='tag'>Spring boot</span>
                                <span className='tag'>JAVASCRIPT</span>
                                <span className='tag'>REACT</span>
                            </div>
                        </div>
                    </div>
                    <div ref={ref2} onMouseLeave={(e)=>leaver(e,ref2)} onMouseMove={(e)=>hoveEnter(e,ref2)}  className={`left-move ${isVisible?'original-move2 backd inline-pad':" "}`}>
                        <div className="flexro">
                            <div className="yellow-box extrw" >
                                <BookOpen size={14} color="#000" strokeWidth={3.25} />
                            </div>
                            <div className="px-4">
                                <h2 className="certificat-tittle" style={{ width: "100%" }}>Electronics and Communication Engineering</h2>
                                <p className="certificat-provider">Anna University</p>
                            </div>
                        </div>
                        <div className="flexro jstbtw py-3">
                            <div className="flexro aligner" >
                                <Calendar size={14} color="#666666" strokeWidth={1.25} />
                                <div style={{ paddingLeft: "5px" }} className="txt-mut">May 2025</div>
                            </div>
                            <div className="completed compleextra flexro">
                                <span className="dot"></span>Completed</div>
                        </div>
                        <div className="txt-sec">Bachelor's degree in Electronics and
                            Communication Engineering with focus on embedded
                            systems, signal processing, and digital communication technologies.</div>
                        <div className="bottom">
                            <div className="skill-tags" >
                                <span className='tag'>ELECTRONICS</span>
                                <span className='tag'>EMBEDDED SYSTEM & IOT </span>
                                <span className='tag'>Digital signal processing</span>
                                <span className='tag'>Communicational system</span>
                            </div>
                        </div>
                    </div>
                    <div ref={ref3} onMouseLeave={(e)=>leaver(e,ref3)} onMouseMove={(e)=>hoveEnter(e,ref3)} className={`left-move ${isVisible?'original-move3 backd inline-pad':" "}`}>
                        <div className="flexro">
                            <div className="yellow-box">
                                <CircuitBoard size={18} color="#000000" strokeWidth={2.25} />
                            </div>
                            <div className="px-4">
                                <h2 className="certificat-tittle">Embedded System & IOT</h2>
                                <p className="certificat-provider">Xpert Automatics</p>
                            </div>
                        </div>
                        <div className="flexro jstbtw py-3">
                            <div className="flexro aligner"  >
                                <Calendar size={14} color="#666666" strokeWidth={1.25} />
                                <div style={{ paddingLeft: "5px" }} className="txt-mut">May 2024</div>
                            </div>
                            <div className="completed compleextra flexro">
                                <span className="dot"></span>Completed</div>
                        </div>
                        <div className="txt-sec">During my internship, I worked with microcontrollers like
                            Arduino and ESP32 and wrote programs in Embedded C.
                            I connected sensors and other devices to build small IoT projects and tested them.</div>
                        <div className="bottom">
                            <div className="skill-tags" >
                                <span className='tag'>pcb simulation</span>
                                <span className='tag'>Embedded system & Iot Design</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default MyCertifications;