import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [deBouncevalue, setDeBouncevalue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDeBouncevalue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return deBouncevalue;
}

export default useDebounce;
