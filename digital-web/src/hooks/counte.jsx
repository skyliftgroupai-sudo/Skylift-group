// hooks/useCountUp.js
import { useEffect, useState } from "react";

export const useCountUp = (end, start = 0, duration = 1500) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
        let startTime = performance.now();

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            setValue(current);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [end, start, duration]);

    return value;
};
