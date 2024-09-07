"use client"
import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercent(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
            <div className="h-full bg-blue-500" style={{ width: `${scrollPercent}%` }}></div>
        </div>
    );
};

export default ScrollProgressBar;
