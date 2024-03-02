import Link from "./Link"
import { useState, useEffect } from "react"

export default function AnimatedLink({ index, show, icon, text, href }) {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setAnimated(true);
            }, index * 500);
            return () => clearTimeout(timer);
        }
    }, [show, index]);

    return (
        <div className={animated ? "animated-item" : ""}>
            <Link
                icon={icon}
                text={text}
                href={href}
            />
        </div>
    );
}