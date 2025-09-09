// components/TypingAnimation.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: [
                'Frontend Engineer',
                'React Developer',
                'MERN Stack Developer',
                'Full Stack Developer',
                'JavaScript Enthusiast',
                'Programmer'
            ],

            typeSpeed: 40,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to prevent memory leaks
            typedInstance.current.destroy();
        };
    }, []);

    return (
        <span style={{ whiteSpace: 'pre' }} ref={typedElement}></span>
    );
};

export default TypingAnimation;
