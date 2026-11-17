
function useRotater(ref,e){
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const nx = ((e.clientY-rect.top)/rect.height)*2-1;
        const ny = ((e.clientX-rect.left)/rect.width)*2-1;
        // console.log(e.clientX,e.clientY,rect.width,rect.height,(e.clientX-rect.left),(e.clientY-rect.top),nx,ny)
        return [nx,ny];
}
export default useRotater;