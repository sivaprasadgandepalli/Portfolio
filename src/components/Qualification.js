import React from 'react'
import '../styles/qualification.css';
export default function Qualification() {
    return (
        <div className='container bg-[#101010] text-white'>
            <div className='flex justify-center items-center'>
                <h2 className='text-center text-3xl md:text-4xl mb-5 heading' style={{ color: 'white' }}>Resume</h2>
            </div>
            <div className='row'>
                <div className='col-md-6 mb-4'>
                    <h2 className='h2'>Education</h2>
                    <div className='wrapper pl-5 border-l-2'>
                        <div className='box'>
                            <span>2020-2024</span>
                            <h5>Batchelor of Technology</h5>
                            <p>I completed my Bachelor of Technology in Electronics and Communication Engineering at Aditya College of Engineering in Surampalem. I achieved a CGPA of 8.03 and studied there from 2020 to 2024. </p>
                        </div>
                        <div className='box'>
                            <span>2018-2020</span>
                            <h5>Associate Degree</h5>
                            <p>Completed Intermediate (MPC) at Sri Surya Junior College, Jaggampeta (2018-2020), gaining deep insights into scientific principles. Achieved a GPA of 9.86, reflecting dedication to studies and strong academic performance.
                            </p>
                        </div>
                        <div className='box'>
                            <span>2017-2018</span>
                            <h5>HighSchool Degree</h5>
                            <p>I completed my Secondary School Certificate (SSC) education at Z P P High School in Mallisala. During the academic year 2017-2018, I dedicated myself to my studies and achieved a notable GPA of 9.7.  </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 mb-4'>
                    <h2 className='h2'>Experience</h2>
                    <div className='wrapper pl-5 border-l-2'>
                        <div className='box'>
                            <span>May 2023-Aug 2023</span>
                            <h5>Full Stack Trainee</h5>
                            <h6 className='font-[500] text-[#ede6e6]'>Technical Hub</h6>
                            <p className=''>I completed a full-stack trainee internship at Technical Hub from May 2023 to August 2023. During this period, I gained proficiency in HTML, CSS, JavaScript, React.js, and Node.js. I applied my skills by building several projects, including a vehicle management system and a car rental website. </p>
                        </div>
                        <div className='box'>
                            <span>Apr 2024-Current</span>
                            <h5>Java Full Stack Intern</h5>
                            <h6 className='font-[500] text-[#ede6e6]'>ExcelR</h6>
                            <p className=''>I joined ExcelR Company as a Java Full Stack Intern on April 8th. This internship is a 5-month program, during which I am gaining in-depth knowledge and hands-on experience in Java full stack development. Throughout the course, I am working on real-world projects and assignments that enhance my skills in both frontend and backend technologies, including Java, Spring Boot, Hibernate,and other essential tools and frameworks. This experience is providing me with a solid foundation in full stack development and preparing me for future professional opportunities in the field. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
