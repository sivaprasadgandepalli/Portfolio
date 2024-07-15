import React, { useRef } from 'react'
import { MdAddCall, MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaGithub } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import '../App.css'
export default function Contact() {
  const form = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ut0ikpe', 'template_dixrsr4', form.current, {
        publicKey: 'vMdeyNqx5DCzq_GFI',
      })
      .then(
        () => {
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <div className='container text-[#f1f2f6] py-4 px-2'>
      <div className='row'>
        <div className='col-md-6 mb-5 mx-2 lg:px-0'>
          <div className='flex flex-col justify-between items-start space-y-8 overflow-hidden h-full'>
            <div className='flex flex-col '>
              <h2 className='font-bold mb-2'>Got A Question?</h2>
              <p className='text-grey mt-2'>I would love to hear from you reach out to me with any comments,suggestions or enquiries and i will be happy to assist you.</p>
            </div>
            <div className='flex flex-col space-y-3 flex-wrap'>
              <div className='flex space-x-2 items-center'>

                <mark className='rounded-full'><MdAddCall /></mark>
                <span className='text-sm font-normal'>+(939) 2471 528</span>
              </div>
              <div className='flex space-x-2 items-center '>
                <mark className='rounded-full'><IoIosMail /></mark>
                <span className='text-sm font-normal'>sivaprasadgandepalli@gmail.com</span>
              </div>
              <div className='flex space-x-2 items-center'>

                <mark className='rounded-full'><MdLocationOn /></mark>
                <span className='text-sm font-normal'>Kakinada,Andhra Pradesh</span>
              </div>
            </div>
            <div className='flex space-x-3'>
              <a href='https://github.com/sivaprasadgandepalli'> <FaGithub fontSize='1.5rem' className='text-black bg-white' /> </a>
              <a href='https://www.linkedin.com/in/siva-prasad-gandepalli-830a28212/'> <FaLinkedin fontSize='1.5rem' className='text-blue-500 bg-white' /> </a>
              <a href='https://www.instagram.com/sivaprasadgandepalli/'> <FaInstagramSquare fontSize='1.5rem' className='text-pink-500 bg-white' /> </a>
              <a href='https://m.facebook.com/profile.php/?id=100029416506612'> <FaFacebookSquare fontSize='1.5rem' className='text-blue-600 bg-white' /> </a>
            </div>
          </div>
        </div>

        <div className='col-md-5'>
          <div className=''>
            <h4 className='px-3'>Get in Touch!</h4>
            <Form className='px-3 py-3' ref={form} onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className='' placeholder="Your Name" name="from_name" required style={{ backgroundColor: '#d2dae2',color:'#f1f2f6' }}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name='from_email' required style={{ backgroundColor: '#d2dae2',color:'#f1f2f6' }}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Type your message' name='message' required style={{ backgroundColor: '#d2dae2',color:'#f1f2f6' }}/>
              </Form.Group>
              <button className='bg-[#01a3a4] text-teal-50 px-3 py-2 rounded-sm block w-full' type="submit">
                Submit
              </button>
            </Form>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
  )
}
