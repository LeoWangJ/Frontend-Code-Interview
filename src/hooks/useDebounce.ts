import { useEffect, useRef, useCallback } from 'react';

type FunctionType = (...args: any[]) => void;

function useDebounce(fn: FunctionType, delay: number): FunctionType {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedFn: FunctionType = useCallback((...args: any[]) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return debouncedFn;
}

export default useDebounce;
