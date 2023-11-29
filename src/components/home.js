import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import img1 from '../images/my thub pic.jpg';
import { FaBeer, FaHamburger } from 'react-icons/fa';
import { Text, Heading, Button, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, ButtonGroup } from '@chakra-ui/react';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import { PhoneIcon, ArrowDownIcon } from '@chakra-ui/icons';
import resume from '../components/Siva Resume.pdf';
import { Card, CardHeader, CardBody, CardFooter, Box, Badge } from '@chakra-ui/react'
import Projects from './projects';
import Contact from './contact';
import Profiles from './profiles';
import Skills from './skills';
function Home() {
    const data = [{
        id: 1,
        title: "Batchelor Of Technology",
        college: "Aditya College Of Engineering",
        stream: "Electronics And Communication Engg.",
        grade: '7.85 Cgpa',
        duration: '2020-2023'
    }, {
        id: 2,
        title: "Intermediate",
        college: "Sri Surya Junior College",
        stream: "MPC",
        grade: '9.86 Gpa',
        duration: '2018-2020'
    }, {
        id: 3,
        title: "SSC",
        college: "Z P P HighSchool",
        stream: "",
        grade: '9.7 Gpa',
        duration: '2017-2018'
    }]
    const [text] = useTypewriter({
        words: ['Web Developer', 'Designer', 'Java Developer'],
        loop: {},
        typeSpeed: 150,
        delaySpeed: 180,
    });
    return (
        <section className='container-fluid ' style={{ backgroundColor: "#1E1E37" }}>
            {/* navbar section */}
            <Navbar collapseOnSelect expand="lg" bg="#2A2D6C" data-bs-theme="dark" sticky='top' className='bg-[#2A2D6C]'>
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#profiles">Profiles</Nav.Link>
                            <Nav.Link eventKey={2} href="#projects">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* hero section */}

            <section className='container pt-5 hero min-h-screen'  id='home'>
                <div className='row mt-5'>
                    <div className='col-md-4 mb-5'>
                        <Image src={img1} rounded className='img1 h-full'/>
                    </div>
                    <div className='col-md-8'>
                        <div className='px-2'>
                            <Heading fontSize='20px' color='grey'>
                                Hi,I am
                            </Heading>
                            <Heading fontSize='30px' color='white'>
                                Siva Prasad Gandepalli
                            </Heading>
                            <Heading fontSize='25px' color='white'>
                                I'm
                                <span style={{ color: 'orange', marginLeft: '5px' }}>{text}</span>
                                <span style={{ color: 'green' }}><Cursor /></span>
                            </Heading>
                            <Text fontSize='16px' color='lightGrey'>
                                I have been working as a web developer for the past 1 year, mainly focused on Web Technologies.
                                I feel comfortable working with technologies like JavaScript, React, Node.js, MongoDB, MySql and many other technologies in the web ecosystem.
                            </Text>
                            <Stack spacing={4} direction='row' align='center'>
                                <Button colorScheme='telegram' size='md'>
                                    <a href={resume}
                                        download="resume"
                                        target="_blank"
                                        rel="noreferrer">Resume </a><ArrowDownIcon boxSize={5} />
                                </Button>
                                <Button colorScheme='telegram' size='md' variant='outline'>
                                    <a href='#contact'>Let's talk</a>
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>

            </section>
            {/* education section */}
            <section className='container mb-4 pt-5' id='education'>
                <div className='flex justify-center'>
                    <h2 className='text-center heading' style={{ color: 'white' }}>Education</h2>
                </div>

                <div className='row mt-4'>
                    {
                        data.map((rec) => {
                            return (
                                <div className='col-md-4' style={{ color: 'white' }} key={rec.id}>
                                    <Card bgColor="#2A2D6C" color="white" className='py-4 px-4 mb-3'>
                                        <header className='text-xl font-bold'>
                                            {rec.title.toUpperCase()}
                                        </header>
                                        <div className='mt-3 text-gray-400'>
                                            {rec?.stream ? <p>{rec.stream}</p> : null}
                                            <div className='d-flex justify-between'>
                                                <p><Badge colorScheme='green'>{rec.duration}</Badge></p>
                                                <p>{rec.grade}</p>
                                            </div>
                                            <p>{rec.college}</p>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
            </section>

            {/* skills section */}
            <section className='container' id='skills'>

                <div className='flex justify-center'>
                    <h2 className='text-center heading' style={{ color: 'white' }} id='skills'>Skills</h2>
                </div>
                <Skills/>
            </section>

            {/* profile section */}
            <section className='container my-5' style={{ backgroundColor: "#1E1E37" }} id='profiles'>
                <div className='flex justify-center'>
                    <h2 className='text-center mb-4 heading' style={{ color: 'white' }}>Profiles</h2>
                </div>
                <h2 className='text-center mb-4 heading' style={{ color: 'white' }}>Profiles</h2>
                <Profiles/>

            </section>

            {/* projects section */}
            <section className='container my-5' id='projects'>
                <div className='flex justify-center'>
                    <h2 className='text-center mb-4 heading' style={{ color: 'white' }}>Projects</h2>
                </div>
                <Projects />
            </section>

            <section className='container my-5' id='contact'>
                <div className='flex justify-center'>
                    <h2 className='text-center mb-4 heading' style={{ color: 'white' }}>Contact</h2>
                </div>
                <Contact />
            </section>

            <section className='container-fluid  py-6 bg-[#2A2D6C] text-white' id='contact'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <h4 className='font-bold-900'>V V D Siva Vara Prasad Gandepalli</h4>
                    <p>All rights are reserved @ 2023</p>
                </div>
            </section>
        </section>
    )
}

export default Home;
