import { useEffect, useRef, useState } from 'react';
import UnderLine from '../components/UnderLine'

import { CodeXml, LayoutDashboard, Zap, UserRoundGroup } from 'lucide-react'
import useInView from '../hook/useInView';
import useRotater from '../hook/useRotater';
import photo from '../assets/LakshmiKandan.jpg'
function AboutMe() {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [isVisible] = useInView(ref, 0.45);
    function hoveEnter(e, xRef) {
        const [x, y] = useRotater(xRef, e);
        const angle = 15;
        xRef.current.classList.add("tilt-is-tracking")
        xRef.current.style.transform = `perspective(1000px) rotateX(${-x * angle}deg) rotateY(${y * angle}deg) translateY(-6px)`

    }
    function leaver(e, xRef) {
        xRef.current.classList.remove("tilt-is-tracking")
        xRef.current.classList.add("tilt")
        xRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div ref={ref} >
                <div style={{ paddingTop: "5rem" }} className={`non ${isVisible ? "mee" : " "}`}>
                    <div className='head'>ABOUT ME</div>
                    <UnderLine />
                    <p className='imtxt'>I'm a passionate developer who loves turning complex
                        problems into simple, beautiful solutions.</p>
                    <div className="mimgeconta">
                        <div className="imgs">
                            <img src={photo} alt="Lakshmikandan" />
                            <div className="frame"></div>
                        </div>
                        <div className={isVisible ? "imgpara" : " "} >
                            <p>I'm a BE Electronics and Communication Engineering graduate from Government
                                College of Engineering, Thanjavur. My ECE background gave me a solid
                                foundation in problem solving, and that's what pushed me toward
                                software development. Right now I'm working on becoming a Java full stack developer.</p>
                            <p>
                                I've worked across the full stack — Java, Spring Boot, Spring Security, JWT, REST APIs, and MySQL
                                on the backend; React, HTML, CSS, and Bootstrap on the front. I've built secure authentication,
                                and containerized apps with Docker.
                            </p>
                            <p>I’m a curious learner who enjoys understanding how things work and then building them myself.
                                I believe in learning step by step, practicing regularly, and improving my work with every project.
                                I like exploring new ideas and finding better ways to solve problems.</p>
                        </div>
                        <div className="skills">
                            <div ref={ref1} onMouseLeave={(e) => leaver(e, ref1)} onMouseMove={(e) => hoveEnter(e, ref1)} className={isVisible ? "skl1" : ""}>
                                <div className="boxemoj"><CodeXml size={20} color="black" strokeWidth={2} /></div>
                                <h6>CLEAN CODE</h6>
                                <p>Writing maintainable, scalable, and
                                    efficient code following best practices.</p>
                            </div>
                            <div ref={ref2} onMouseLeave={(e) => leaver(e, ref2)} onMouseMove={(e) => hoveEnter(e, ref2)} className={isVisible ? "skl2" : ""}>
                                <div className="boxemoj"><LayoutDashboard size={20} color="black" strokeWidth={2} /></div>
                                <h6>CREATIVE DESIGN</h6>
                                <p>Crafting beautiful and intuitive user
                                    interfaces that enhance user experience.</p>
                            </div>
                            <div ref={ref3} onMouseLeave={(e) => leaver(e, ref3)} onMouseMove={(e) => hoveEnter(e, ref3)} className={isVisible ? "skl3" : ""}>
                                <div className="boxemoj"><Zap size={20} color="black" strokeWidth={2} /></div>
                                <h6>FAST PERFORMER</h6>
                                <p>Optimizing applications for speed and
                                    performance across all devices.</p>
                            </div>
                            <div ref={ref4} onMouseLeave={(e) => leaver(e, ref4)} onMouseMove={(e) => hoveEnter(e, ref4)} className={isVisible ? "skl4" : ""}>
                                <div className="boxemoj"><UserRoundGroup size={20} color="black" strokeWidth={2} /></div>
                                <h6>TEAM PLAYER</h6>
                                <p>Collaborating effectively with cross-functional teams to deliver results.</p>
                            </div>
                        </div>
                    </div>
                </div></div>
        </>
    );
}
export default AboutMe;