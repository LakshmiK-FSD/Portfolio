import { useState, useEffect } from "react";

function useInView(ref,thresholder) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if(!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if(entry.isIntersecting){
          observer.disconnect();
        }
      },
      { threshold: thresholder}
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);
  return [isVisible];
}
export default useInView;