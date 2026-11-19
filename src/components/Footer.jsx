import { Mail } from "lucide-react";
function Footer(){
    return(
        <div className="footer">
            <div className="foot-container footer-btw">
                <div>
                <h4 className="foot-name">Lakshmi Kandan L</h4>
                <p className="skill-foot">Full Stack Developer</p>
            </div>
            <div className="flexro gap-setter social-linkes" >
                <a className="social-link" href="https://github.com/LakshmiK-FSD"><i className="bi bi-github making" ></i></a>
                <a className="social-link" href="https://www.linkedin.com/in/lakshmikandan-ece/"><i class="bi bi-linkedin"></i></a>
                <a className="social-link" href="#getintouch"><Mail size={18} color="#ffffff" strokeWidth={1.25} /></a>
            </div>
            </div>
            </div>
    );
}
export default Footer;