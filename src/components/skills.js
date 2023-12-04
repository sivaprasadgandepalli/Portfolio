import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, CardHeader, CardBody, CardFooter, Box, Badge, Stack } from '@chakra-ui/react';
import bs from '../images/Skills/bs.jpeg';
import java from '../images/Skills/java.jpeg';
import html from '../images/Skills/html.jpeg';
import mdb from '../images/Skills/mdb.jpeg';
import postman from '../images/Skills/postman.jpeg';
import python from '../images/Skills/python.jpeg';
import vs from '../images/Skills/vs.jpeg';
import git from '../images/Skills/js.png';
import chakra from '../images/Skills/chakra.png';
import cpp from '../images/Skills/cpp.png';
import css from '../images/Skills/css.png';
import ejs from '../images/Skills/ejs.png';
import js from '../images/Skills/js.png';
import github from '../images/Skills/github.png';
import mui from '../images/Skills/mui.png';
import mysql from '../images/Skills/mysql.png';
import tailwind from '../images/Skills/tailwind.png';
import node from '../images/Skills/node.png';
import react from '../images/Skills/logo192.png'
export default function Skills() {
    const frontend = [{ id: 1, "title": "HTML", "img": html }, { id: 2, "title": "CSS", "img": css },
    { id: 3, "title": "Javascript", "img": js }, { id: 4, "title": "React Js", "img": react },
    { id: 5, "title": "Chakra Ui", "img": chakra }, { id: 6, "title": "Bootstrap", "img": bs },
    { id: 7, "title": "Material Ui", "img":mui }
    ];
    const backend = [{ id: 1, "title": "Node Js", "img": node }, { id: 2, "title": "Express Js", "img": ejs },
    { id: 3, "title": "My Sql", "img": mysql },{ id:4, "title": "Mongo Db", "img": mdb }
    ,{ id:5, "title": "Python", "img": python },{ id:5, "title": "Java", "img": java }
    ,{ id:6, "title": "Cpp", "img": cpp }];
    const others=[{id:1,"title":"Github","img":github},{id:2,"title":"Git","img":git},{id:3,"title":"Postman","img":postman},
{id:4,"title":"Vs Code","img":vs}]
    return (
        <div className='row mt-5'>
            <div className='col-md-4 mb-5'>
                <div className='flex flex-col  items-start border-1 rounded-md relative'>
                    <header className=' text-white text-2xl mb-3 bg-sky-700 w-fit py-1 px-2 border-1 text-center absolute -top-5 rounded-sm left-12'>Frontend</header>
                    <ul className='flex flex-wrap gap-2'>
                        {frontend.map((tech) => {
                            return (
                                <li className='flex items-center gap-x-1 border-1 w-fit rounded-lg p-2 text-white'>
                                    <img src={tech.img} className='w-6 h-6 shadow-lg rounded-full' />
                                    <span>{tech.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-md-4 mb-5'>
                <div className='flex flex-col  items-start border-1 rounded-md relative'>
                    <header className=' text-white text-2xl mb-3 bg-sky-700 w-fit py-1 px-2 border-1 text-center absolute -top-5 rounded-sm left-12'>Backend</header>
                    <ul className='flex flex-wrap gap-2'>
                        {backend.map((tech) => {
                            return (
                                <li className='flex items-center gap-x-1 border-1 w-fit rounded-lg p-2 text-white'>
                                    <img src={tech.img} className='w-6 h-6 shadow-lg rounded-full' />
                                    <span>{tech.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-md-4'>
            <div className='flex flex-col  items-start border-1 rounded-md relative'>
                    <header className=' text-white text-2xl mb-3 bg-sky-700 w-fit py-1 px-2 border-1 text-center absolute -top-5 rounded-sm left-12'>Others</header>
                    <ul className='flex flex-wrap gap-2'>
                        {others.map((tech) => {
                            return (
                                <li className='flex items-center gap-x-1 border-1 w-fit rounded-lg p-2 text-white'>
                                    <img src={tech.img} className='w-6 h-6 shadow-lg rounded-full' />
                                    <span>{tech.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
