import React, { useState, useEffect } from 'react';

const ProgressBar = ({ value}) => {
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
        }, 30);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="w-full bg-[#232323] rounded-3xl">
            <div
                className="bg-[#01a3a4] h-[0.58rem] rounded-3xl"
                style={{
                    width: `${progress}%`,
                    transition: 'width 0.1s linear'
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
