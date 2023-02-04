import React, {useCallback, useRef} from 'react';

const UseDebounce = (callback, delay) => {
    const timer = useRef();

    const debouncedCallback = useCallback((...param) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...param)
        }, delay)
    }, [callback, delay])

    return debouncedCallback
};

export default UseDebounce;