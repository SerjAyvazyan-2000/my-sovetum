import { useEffect } from "react";

export const ScrollToTop = () => {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
    }, []);

    return null;
};