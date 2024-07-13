import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { Text, Heading, Button, Stack, Card, CardHeader, CardBody, CardFooter, Box, Badge } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { BiUpArrowAlt } from "react-icons/bi";
import Projects from './projects';
import Contact from './contact';
import SkillSection from './skillSection';
import NavbarSection from './Navbar';
import Qualification from './Qualification';
import HeroSection from './HeroSection';
import { FaWhatsapp } from "react-icons/fa";
import '../App.css';
function Home() {

    const [bg, setBg] = useState('#232323');
    const [show, setShow] = useState(false)
    const phoneNumber = '9392471528';
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop !== 0) {
            setBg('#2f3640');
            setShow(true)
        } else {
            setBg('#101010');
            setShow(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className='relative container-fluid p-0' style={{ backgroundColor: "#101010", transition: 'background-color 0.5s ease-in-out' }}>
            <NavbarSection bg={bg} scrollToTop={scrollToTop} />

            <HeroSection />

            <section className='container mb-4 pt-5 mt-5 gap-2' id='education'>
                <Qualification />
            </section>

            <SkillSection />

            <section className='container pt-5' id='projects'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-center text-3xl md:text-4xl mb-5 heading' style={{ color: 'white' }}>Portfolio</h2>
                </div>
                <Projects />
            </section>

            <section className='container mb-5 pt-5' id='contact'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-left text-3xl md:text-4xl mb-5 heading' style={{ color: 'white' }}>Contact</h2>
                </div>
                <Contact />
            </section>

            <FaWhatsapp className='bg-green-500 text-[2.6rem] fixed z-10 bottom-0 left-5 cursor-pointer text-white rounded-md' onClick={() => { window.open(`https://wa.me/${phoneNumber}`, '_blank'); }} style={{ display: show ? 'block' : 'none' }} />
            <BiUpArrowAlt className=' bg-[#192a56] text-white h-12 w-12 rounded-full p-1 fixed z-10 bottom-0 right-5 cursor-pointer' onClick={scrollToTop} style={{ display: show ? 'block' : 'none' }} />

            <section className='relative container-fluid  py-6 bg-[#2f3640] text-white text-center' id='contact'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <h4 className='font-bold-900'>V V D Siva Vara Prasad Gandepalli</h4>
                    <p>All rights are reserved @ 2023</p>
                </div>
            </section>
        </section>
    )
}

export default Home;
