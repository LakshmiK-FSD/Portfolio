import PPSlider from "../components/PPSlider";
import HCSlider from "../components/HCSlider";
import UnderLine from "../components/UnderLine";
import { useRef } from "react";
import useInView from "../hook/useInView";
function Projects({bigFunc,smallFunc}) {
    const ref = useRef(null);
    const [isVisible] = useInView(ref, 0.15);
    return (
        <>
            <div ref={ref}  >
                <div className={`non ${isVisible ? "mee" : " "}`}>
                    <div className='head'>My Projects</div>
                    <UnderLine />
                    <p className='imtxt'>A showcase of my recent work, demonstrating expertise across different technologies and domains.</p>
                </div>
                <div className={`left-side2 ${isVisible ? "original-stater blckering" : " "}`}>
                    <div className="border1 flexcol pbb" >
                        <h6 className="project-name">Prime Pass</h6>
                        <div className="px-4 pt-2">

                            <PPSlider />
                        </div>
                        <div className="px-4  widther">
                            <h5 className="certificat-tittle pt-4 glower project-title">Online Movie Ticket Booking</h5>
                            <ul className="project-info">
                                <li>PrimePass, an online movie ticket booking platform with
                                    real-time seat locking using atomic operations to eliminate race conditions
                                    and prevent double-booking under concurrent load.</li>
                                <li>Designed a high-concurrency booking engine in Java 21 + Spring Boot
                                    with MySQL, using atomic seat status updates
                                    to prevent race conditions and double-booking under concurrent load.</li>
                                <li>Implemented temporary seat holds with TTL-based auto-release, reducing
                                    abandoned-lock issues and improving seat utilization across peak showtimes.</li>
                                <li>Developed the web module responsible for managing showtimes, theaters, and
                                    seat maps, built on a Maven-based modular architecture to keep scheduling and
                                    seat-configuration logic organized and maintainable.</li>
                            </ul>
                            <div className="skill-tags">
                                <span className='tag'>REACT</span>
                                <span className='tag'>HTML</span>
                                <span className='tag'>CSS</span>
                                <span className='tag'>BOOTSTRAP</span>
                                <span className='tag'>JAVA</span>
                                <span className='tag'>SPRING BOOT</span>
                                <span className='tag'>SPRING DATA JPA</span>
                                <span className='tag'>Spring Security/Jwt</span>
                                <span className='tag'>MY SQL</span>
                            </div>
                            <div className="flexro gaper-1">
                                <div className=" btn-git inline-blk mt-2">
                                    <div className="btn-m" ><i className="bi bi-github making" ></i>
                                        <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="https://github.com/LakshmiK-FSD/PimePass/tree/main/primepass/src">Frontend</a></div>
                                    <div className="over-git"> </div>
                                </div>
                                <div className=" btn-git inline-blk mt-2">
                                    <div className="btn-m" ><i className="bi bi-github making" ></i>
                                        <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="https://github.com/LakshmiK-FSD/PrimePassJavaCode/tree/main/src/main/java/com/lakshmikandan/primepass">Backend</a></div>
                                    <div className="over-git"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd display">

                    </div>
                    <div className="border1 flexcol pbb  mt-4" >
                        <h6 className="project-name">LK Care Hospital</h6>
                        <div className="px-4 pt-2 ">
                            <HCSlider />
                        </div>
                        <div className="px-4 widther">
                            <h5 className="certificat-tittle pt-4 glower project-title">Online Health Care </h5>
                            <ul className="project-info">
                                <li>LKHealthcare, a healthcare website using Java Servlets and JSP for server-side dynamic page rendering and request handling.</li>
                                <li>Implemented form submission and server-side processing with Servlets, handling user input and displaying dynamic responses via JSP.</li>
                                <li>Structured the application with a basic MVC-style flow.</li>
                            </ul>
                            <div className="skill-tags">
                                <span className='tag'>Java script</span>
                                <span className='tag'>HTML</span>
                                <span className='tag'>CSS</span>
                                <span className='tag'>JAVA</span>
                                <span className='tag'>Java servlet</span>
                                <span className='tag'>JSP</span>
                                <span className='tag'>JDBC</span>
                                <span className='tag'>MY SQL</span>
                            </div>
                            <div className=" btn-git inline-blk mt-2">
                                <div className="btn-m">
                                    <i className="bi bi-github making" ></i>
                                    <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="https://github.com/LakshmiK-FSD/MedicalProject/tree/main/src/main/webapp">CODE</a></div>
                                <div className="over-git"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Projects;