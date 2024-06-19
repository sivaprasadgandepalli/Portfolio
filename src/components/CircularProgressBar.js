import React, { useState, useEffect } from 'react';
import '../styles/skill.css';
const CircularProgressBar = ({ value }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < value) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return value;
                }
            });
        }, 10);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="progress-bar" style={{ backgroundImage: `conic-gradient(#01a3a4 ${progress * 3.6}deg,#232323 0deg)` }}>
            <span className="progress-value">{progress}% </span>
        </div>
    );
};

export default CircularProgressBar;
