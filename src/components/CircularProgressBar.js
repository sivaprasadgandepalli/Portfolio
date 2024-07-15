import React, { useState, useEffect } from 'react';
import '../styles/skill.css';
import node from '../images/proficient/node.png';
import react from '../images/proficient/logo512.png';
import express from '../images/proficient/express.png';
import mongodb from '../images/proficient/pngwing.com.png';
import mysql from '../images/proficient/mysql.png';
import redux_toolkit from '../images/proficient/redux-toolkit.png';
const CircularProgressBar = ({ value, title }) => {
    const [progress, setProgress] = useState(0);
    const images = [{ name: "React Js", img: react }, { name: "Node Js", img: node }, { name: "Express Js", img: express }, { name: "MongoDB", img: mongodb }, { name: "MySql", img: mysql }, { name: "redux-toolkit", img: redux_toolkit }];
    const findLogo = (title) => {
        const imageObject = images.find(image => image.name === title);
        return imageObject ? imageObject.img : null;
    };
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
        <div className="progress-bar" style={{ backgroundImage: `conic-gradient(#01a3a4 ${progress * 3.6}deg,#232323 0deg)` }}>
            {/* <span className="progress-value">{progress}% </span> */}
            <img src={findLogo(title)} className='h-8 w-8 z-10' />
        </div>
    );
};

export default CircularProgressBar;
