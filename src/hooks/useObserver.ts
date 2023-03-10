import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function(entries, observer) {
            console.log(canLoad, isLoading)
            if(entries[0].isIntersecting === true && canLoad) {
                console.log(entries[0].isIntersecting)
                callback()
            }

        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}

