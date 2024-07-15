import React from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { Text, Heading, Button, Stack, Card } from '@chakra-ui/react';
import img1 from '../images/my thub pic.jpg';
import Image from 'react-bootstrap/Image';
import express from '../images/proficient/express.png';
import node from '../images/proficient/node.png';
import mongodb from '../images/proficient/pngwing.com.png';
import react from '../images/proficient/logo512.png';
import resume from '../components/Siva Resume.pdf';
export default function HeroSection() {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Programmer', 'Java Developer'],
        loop: {},
        typeSpeed: 150,
        delaySpeed: 180,
    });
    const handleContactMeClick = () => {
        const phoneNumber = '1234567890';
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <section className='container pt-5' id='home'>
            <div className='row mt-2 px-2'>

                <div className='col-lg-8 col-md-7 order-2 lg:order-1'>
                    <div className='lg:pl-5'>
                        <Heading fontSize='20px' color='grey'>
                            Hi,I am
                        </Heading>
                        <h2 className='font-semibold text-white'>
                            Siva Prasad Gandepalli
                        </h2>
                        <Heading fontSize='25px' color='white'>
                            I'm
                            <span style={{ color: 'orange', marginLeft: '5px' }}>{text}</span>
                            <span style={{ color: 'green' }}><Cursor /></span>
                        </Heading>
                        <p className=' md:pr-[5rem] lg:pr-[9rem] text-gray-100 text-left'>
                            I am a passionate and dedicated web developer specializing in web technologies. I have extensive proficiency in various aspects of the web ecosystem, including front-end development, back-end development, and full-stack solutions.
                        </p>
                        <div className='flex flex-wrap lg:flex-nowrap items-center'>
                            <p className='text-white'>Currently working on</p>
                            <div className='flex items-center mb-3 lg:mb-0'>
                                <img src={mongodb} className='w-10 h-9' alt='mongodb' />
                                <img src={express} className='w-10 h-10' alt='express js' />
                                <img src={node} className='w-8 h-8 ml-2' alt='node js' />
                                <img src={react} className='w-8 h-8 ml-2' alt='react js' />
                            </div>
                        </div>
                        <Stack colorscheme='telegram' spacing={4} direction='row' align='center'>
                            <Button className='' size='md'>
                                <a href={resume}
                                    download="resume"
                                    target="_blank"
                                    rel="noreferrer">Resume </a><ArrowDownIcon boxSize={5} />
                            </Button>
                            <Button colorScheme='teal' onClick={handleContactMeClick}>Hire me</Button>
                        </Stack>
                    </div>
                </div>
                <div className='col-lg-4 col-md-5 lg:mb-5 mb-3 shadow-md md:order-2'>
                    <img src={img1} className=' h-full w-full rounded-md' alt='hero image' loading='lazy' />
                </div>
            </div>

        </section>
    )
}
