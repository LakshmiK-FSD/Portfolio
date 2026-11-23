import { useEffect } from "react";

function Header({ bigFunc,smallFunc,headBar}) {



    useEffect(() => {
        
        console.log(
            "%c✦ LAKSHMI KANDAN L — Portfolio Loaded ✦",
            `
    background-color: #2b0d00;
    color: #ffcc00;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 24px;
    border: 1px solid #734d26;
    border-radius: 4px;
    display: inline-block;
    font-family: serif;
  `
        );
       console.log(headBar+"hello")
    }, [headBar])
    return (
        <>
            <div>
                <section className={`header ${!headBar?"scrll-styl":" "}`}>
                    <div className="d-flex justify-content-between">
                        <h2 className="gradi">Lakshmi Kandan L</h2>
                        <div className="navbarr">
                            <ul className="flex-btw ctrl">
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#home">HOME</a></li>
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#aboutme">ABOUT</a></li>
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#myskills">SKILLS</a></li>
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#projects">PROJECTS</a></li>
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#mycertificat">CERTIFICATIONS</a></li>
                                <li><a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#getintouch">CONTACT</a></li>
                            </ul>
                            <div className="bttne">
                                <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="#getintouch">HIRE ME</a></div></div></div>
                </section>
            </div>
        </>
    );
}
export default Header;