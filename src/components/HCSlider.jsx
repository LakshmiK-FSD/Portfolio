import { useEffect, useRef, useState } from "react"
import pp1 from "../assets/healthcare/hc1.png"
import pp2 from "../assets/healthcare/hc2.png"
import pp3 from "../assets/healthcare/hc3.png"
function HCSlider(){
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
  { id: 3, img: pp3}
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
export default HCSlider;