import { Mail } from "lucide-react";
import { useRef } from "react";
import useInView from "../hook/useInView";
function Footer() {
    const ref = useRef(null);
    const [isVisible] = useInView(ref, 0.1)
    return (
        <div ref={ref} className="footer">
            <div className="foot-container footer-btw">
                <div className={`bottom ${isVisible ? "stable" : " "}`}>
                    <h4 className="foot-name">Lakshmi Kandan L</h4>
                    <p className="skill-foot">Full Stack Developer</p>
                </div>
                <div className={`bottom-right ${isVisible ? "stable" : " "}`}>
                    <div className="flexro gap-setter social-linkes" >
                        <a className="social-link" href="https://github.com/LakshmiK-FSD"><i className="bi bi-github making" ></i></a>
                        <a className="social-link" href="https://www.linkedin.com/in/lakshmikandan-ece"><i className="bi bi-linkedin"></i></a>
                        <a className="social-link" href="#getintouch"><Mail size={18} color="#a8a8a8" strokeWidth={1.25} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;