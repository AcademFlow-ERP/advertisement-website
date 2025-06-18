import { useEffect, type RefObject } from "react";

const  useCloseOnOutsideClicks = (ref: RefObject<HTMLDivElement | HTMLLabelElement | null>, eventCallbackFn: () => void) => {
    useEffect(() => {
        const catchOutsideClicks = (event: { target: any}) => {
            if(ref.current && ref.current.contains(event.target)) return;
            eventCallbackFn();
        }
        document.addEventListener("mousedown", catchOutsideClicks)
        document.addEventListener("touchstart", catchOutsideClicks)
        return() => {
            document.addEventListener("mousedown", catchOutsideClicks)
            document.addEventListener("touchstart", catchOutsideClicks) 
        }
    },[ref, eventCallbackFn])
}
export default useCloseOnOutsideClicks