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
    return (
        <section className='container pt-5' id='home'>
            <div className='row mt-2 px-2'>
                <div className='col-md-4 lg:mb-5 mb-3 shadow-md'>
                    <img src={img1} className=' h-full w-full rounded-md' />
                </div>
                <div className='col-md-8'>
                    <div className=''>
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
                        <p className=' md:pr-[9rem] text-gray-100 text-balance lg:text-left'>
                            I am a passionate and dedicated web developer specializing in web technologies. I have extensive proficiency in various aspects of the web ecosystem, including front-end development, back-end development, and full-stack solutions.
                        </p>
                        <div className='flex flex-wrap lg:flex-nowrap items-center'>
                            <p className='text-white'>Currently working on</p>
                            <div className='flex items-center mb-3 lg:mb-0'>
                                <img src={mongodb} className='w-10 h-9' />
                                <img src={express} className='w-10 h-10' />
                                <img src={node} className='w-8 h-8 ml-2' />
                                <img src={react} className='w-8 h-8 ml-2' />
                            </div>
                        </div>
                        <Stack colorscheme='telegram' spacing={4} direction='row' align='center'>
                            <Button className='' size='md'>
                                <a href={resume}
                                    download="resume"
                                    target="_blank"
                                    rel="noreferrer">Resume </a><ArrowDownIcon boxSize={5} />
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>

        </section>
    )
}
