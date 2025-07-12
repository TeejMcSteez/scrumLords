// Credit: https://www.geeksforgeeks.org/reactjs/how-to-create-typewriter-effect-in-reactjs/
"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string,
    speed: number
}

/**
 * 
 * @param text - the string being typewritten
 * @param speed - the speed to type each character in milliseconds
 * @returns HTMLSpanElement with no styles
 */
export default function Typewriter({ text, speed }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText(displayedText + text.charAt(index));
            setIndex(index + 1);
        }, speed);
        
        return () => clearInterval(interval);

    }, [text, displayedText, speed]);

    return <span>{displayedText}</span>
}