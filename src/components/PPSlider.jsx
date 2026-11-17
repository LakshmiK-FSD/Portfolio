import { useEffect, useRef, useState } from "react"
import pp1 from "../assets/primepass/pp1.png"
import pp2 from "../assets/primepass/pp2.png"
import pp3 from "../assets/primepass/pp3.png"
import pp4 from "../assets/primepass/pp4.png"
import pp5 from "../assets/primepass/pp6.png"
import pp6 from "../assets/primepass/pp7.png"
import pp7 from "../assets/primepass/pp8.png"
import pp8 from "../assets/primepass/pp9.png"
import pp9 from "../assets/primepass/pp10.png"
import pp10 from "../assets/primepass/pp11.png"
import pp11 from "../assets/primepass/ppcom1.png"
import pp12 from "../assets/primepass/ppcom2.png"

function PPSlider(){
    const [width, setWidth] = useState(window.innerWidth > 920 ? 905 : 305);
    const [index,setIndex]=useState(0);
    const scrollRef=useRef(null);
    function goto(i){
        scrollRef.current.scrollTo({left:i*width,behavior:"smooth"})
        setIndex(i);
    }
    function nextMove(){
        const newIndex = (index+1) % movies.length;
        scrollRef.current.scrollTo({left:newIndex*width,behavior:"smooth"})
        setIndex(newIndex);
    }
    useEffect(()=>{
        
   const timer = setInterval(nextMove,3000)
    return ()=> clearInterval(timer);
},[index]);
    const movies = [
  { id: 1, img: pp1},
  { id: 2, img: pp2},
  { id: 3, img: pp3},
  { id: 4, img: pp4},
  { id: 5, img: pp5},
  { id: 6, img: pp6},
  { id: 7, img: pp7},
  { id: 8, img: pp8},
  { id: 9, img: pp9},
  { id: 10, img: pp10},
  { id: 11, img: pp11},
  { id: 12, img: pp12}

];
const doter = movies.map((e,i)=>
    <span key={i}
    className={`doting ${index===i?"active":""}`}
    onClick={()=>goto(i)}
    >
    </span>
)
const slide = movies.map((element)=>(<div className="slide" key={element.id}>
    <img src={element.img} alt="" />
</div>));
    return(
        <div className="sliderDot">
        <div ref={scrollRef} className="slider">
        {slide}
        </div>  
         <div className="dotsSli">
           {doter}
        </div>
        </div>
    );
}
export default PPSlider;