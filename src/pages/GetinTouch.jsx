import UnderLine from "../components/UnderLine";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useInView from '../hook/useInView'
function GetinTouch({bigFunc,smallFunc}) {
    const ref = useRef(null);
    const [isVisible] = useInView(ref,0.25);
    return (
        <>
            <div ref={ref}>
                <div className={`non ${isVisible ? 'mee' : ' '}`}>
                    <div className='head' >Get In Touch</div>
                        <UnderLine />
                        <p className="imtxt" >Ready to start your next project? Let's collaborate and create something amazing together.</p>
                    </div>
                    <div className="flexro justbtw">
                        <div className={`left-move ${isVisible?"original-move emaill aligncent":" "}`}>
                            <div>
                                <span className="tittle ">Let's Connect</span>
                                <div className="flexcol gaper pt-4"> <div className="phn">
                                    <div className="boxemoj"><Mail size={19} color="#000000" strokeWidth={2.25} /></div>
                                    <div >
                                        <p>EMAIL</p>
                                        <a onMouseMove={bigFunc} onMouseLeave={smallFunc} href="mailto:lakshmikandan2020@gmail.com">
                                            lakshmikandan2020@gmail.com
                                        </a>
                                    </div>
                                </div>
                                    <div className="phn">
                                        <div className="boxemoj"><Phone size={19} color="#000" strokeWidth={2.25} /></div>
                                        <div><p>PHONE</p>
                                            <div className="getxt">+91 93611 06095</div>
                                        </div></div>
                                    <div className="phn">
                                        <div className="boxemoj"><MapPin size={19} color="#000" strokeWidth={2.25} /></div>
                                        <div><p>LOCATION</p>
                                            <div className="getxt">Cuddalore,TamilNadu,India</div>
                                        </div></div></div></div>
                        </div>
                        <div className={`left-move ${isVisible?"original-move2 sendm width":" "}`}>
                            <span className="titlehead">Send A Message</span>
                            <form action="https://formspree.io/f/xbgodqoj" method="POST" className="flexcol gaper pt-4">
                                <input className="inputer" type="text" name="Name" placeholder="Your Name" required />
                                <input className="inputer" type="text" name="Phone No" placeholder="Your Phone" required />
                                <input className="inputer" type="text" name="MailId" placeholder="Your MailID"  />
                                <input className="inputer" type="text" name="Message" placeholder="Your Message"  required/>
                                <button onMouseMove={bigFunc} onMouseLeave={smallFunc} type="submit" className="boxemoj nrml-btn bwh blck">SEND MESSAGE <i className="bi design bi-arrow-right-short"></i></button>
                            </form>

                        </div>
                    </div>
                </div>
        </>
    );
}
export default GetinTouch;