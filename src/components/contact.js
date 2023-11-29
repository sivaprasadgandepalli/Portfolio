import React from 'react'
import { MdAddCall, MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contact() {
  return (
    <div className='container bg-[#2A2D6C] text-white py-4 px-2'>
      <div className='row'>
      <div className='col-md-1'></div>
        <div className='col-md-5 mb-5'>
          <div className='flex flex-col justify-between items-start space-y-8 overflow-hidden h-full'>
            <div className='flex flex-col '>
              <h2 className='font-bold mb-2'>Got A Question?</h2>
              <p className='text-grey mt-2'>I would love to hear from you reach out to me with any comments,suggestions or enquiries and i will be happy to assist you.</p>
            </div>
            <div className='flex flex-col space-y-3 flex-wrap'>
              <div className='flex space-x-2 items-center'>
                
                <mark className='rounded-full'><MdAddCall /></mark>
                <span>+(939) 2471 528</span>
              </div>
              <div className='flex space-x-2 items-center '>
                <mark className='rounded-full'><IoIosMail /></mark>
                <span>sivaprasadgandepalli@gmail.com</span>
              </div>
              <div className='flex space-x-2 items-center'>
                
                <mark className='rounded-full'><MdLocationOn /></mark>
                <span>Kakinada,Andhra Pradesh</span>
              </div>
            </div>
            <div className='flex space-x-3'>
              <a href='https://github.com/sivaprasadgandepalli'> <FaGithub fontSize='1.5rem' /> </a>
              <a href='https://www.linkedin.com/in/siva-prasad-gandepalli-830a28212/'> <FaLinkedin fontSize='1.5rem' /> </a>
              <a href='https://www.instagram.com/sivaprasadgandepalli/'> <FaInstagramSquare fontSize='1.5rem' /> </a>
              <a href='https://m.facebook.com/profile.php/?id=100029416506612'> <FaFacebookSquare fontSize='1.5rem' /> </a>
            </div>
          </div>
        </div>
        
        <div className='col-md-5'>
          
          <div className=''>
          <h4 className=' px-3'>Get in Touch!</h4>
            <Form className=' px-3 py-3'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Type your message' />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
  )
}
