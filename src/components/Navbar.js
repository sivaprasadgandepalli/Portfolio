import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Text, Heading, Button, Stack } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import ScrollIntoView from 'react-scroll-into-view';
import logo from '../images/logo.png';
import Container from 'react-bootstrap/Container';
export default function NavbarSection({bg,scrollToTop}) {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" sticky='top' style={{ backgroundColor: bg }} className='py-[.73rem]'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className='w-24 h-12 mix-blend-screen' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" ms-auto">
                        <ScrollIntoView>
                            <Nav.Link
                            onClick={scrollToTop}>Home</Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#education'>
                            <Nav.Link >Resume</Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#skill-section'>
                            <Nav.Link>Skills</Nav.Link>
                        </ScrollIntoView>

                        <ScrollIntoView selector='#projects'>
                            <Nav.Link >
                                Portfolio
                            </Nav.Link>
                        </ScrollIntoView>

                        <ScrollIntoView selector='#contact'>
                            <button className='bg-[#282828] px-3 text-center flex items-center justify-center lg:ml-5 mt-0 lg:mt-3 shadow-md shadow-black'><Nav.Link>Contact</Nav.Link></button>
                        </ScrollIntoView>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
