import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Text, Heading, Button, Stack } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import ScrollIntoView from 'react-scroll-into-view';
import logo from '../images/logo.png';
import Container from 'react-bootstrap/Container';
import burger_menu from "../images/basic/burger-menu.svg";
import '../styles/navbar.css';
export default function NavbarSection({ bg, scrollToTop }) {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" sticky='top' style={{ backgroundColor: bg }} className='py-[.73rem]'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className='w-24 h-12 mix-blend-screen' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mr-2 lg:ml-0 custom-toggle-btn'>
                    <img src={burger_menu} className='h-10 w-10' />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className='ml-[40%]  md:ml-[50%]'>
                    <Nav className="ms-auto">
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
                            <Nav.Link>Contact</Nav.Link>
                        </ScrollIntoView>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
