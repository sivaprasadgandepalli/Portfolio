import React from 'react'
import '../styles/skill.css';
import ProgressBar from './progressBar';
import CircularProgressBar from './CircularProgressBar';
export default function SkillSection() {
    const Basic = [{ title: "Html", perc: 90 }, { title: "CSS", perc: 85 }, { title: "JavaScript", perc: 77 }, { title: "Bootstrap", perc: 80 }, { title: "Tailwind CSS", perc: 79 }];
    const mern = [{ title: "React Js", perc: 75 }, { title: "Node Js", perc: 70 }, { title: "Express Js", perc: 65 }, { title: "MongoDB", perc: 80 }, { title: "MySql", perc: 67 }, { title: "redux-toolkit", perc: 74 }]
    let valArr = [87, 90, 75, 69, 70, 84];
    return (
        <div className='container bg-[#101010] text-white pt-5' id='skill-section'>
            <div className='flex justify-center items-center'>
                <h2 className='text-center  text-3xl md:text-4xl mb-5 heading' style={{ color: 'white' }}>Skills</h2>
            </div>
            <div className='row px-3 items-center'>

                <div className='col-md-6 mb-5 lg:mb-0'>
                    {
                        Basic.map((skill, i) => {
                            return (
                                <div className="w-full flex flex-col gap-y-2 mb-3 lg:mb-2" key={skill.title}>
                                    <div className="flex items-center justify-between">
                                        <span>{skill.title}</span>
                                        <span className="value">{skill.perc}%</span>
                                    </div>
                                    <ProgressBar value={skill.perc} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-md-6'>
                    <div className='grid lg:grid-cols-3 grid-cols-2 '>
                        {
                            mern.map((skill, i) => {
                                return (
                                    <div className="Circular-bar-item" key={skill.title}>
                                        <CircularProgressBar value={skill.perc} />
                                        <h4 className='text-sm'>{skill.title}</h4>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
