import React, { useState, useEffect } from 'react';

import { FaArrowUp  } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 bg-brown-primary text-white rounded-full p-3 shadow-lg text-3xl duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
