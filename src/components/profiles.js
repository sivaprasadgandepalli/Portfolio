import React from 'react'
import cchef from '../images/profiles/cchef.jpg';
import gfg from '../images/profiles/gfg.png';
import github from '../images/profiles/github.jpg';
import linkedin from '../images/profiles/linkedin.jpg';
import hackerrank from '../images/profiles/hackerrank.png';
import { BsBoxArrowUpRight } from "react-icons/bs";
import leetcode from '../images/profiles/leetcode.png';
export default function Profiles() {
    const profileData = [{ title: "Geeks for Geeks", url: 'https://auth.geeksforgeeks.org/user/sivaprasadgandepalli', img: gfg },
    { title: "Leet Code", url: 'https://leetcode.com/20MH1A0483/', img: leetcode },
    { title: 'Hackerrank', url: 'https://www.hackerrank.com/20MH1A0483', img: hackerrank },
    { title: 'Code Chef', url: 'https://www.codechef.com/users/siva_prasad29', img: cchef },
    { title: 'GitHub', url: 'https://github.com/sivaprasadgandepalli', img: github },
    { title: 'Linkedin', url: 'https://www.linkedin.com/in/siva-prasad-gandepalli-830a28212/ ', img: linkedin }];
    return (
        <section className='container mt-5 pt-5' id='profiles'>
            <div className='flex justify-center  mb-5'>
                <h2 className='text-center heading text-3xl md:text-4xl' style={{ color: 'white' }}>Profiles</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    profileData.map((profile) => {
                        return (
                            <div className='flex items-center gap-2 bg-[#242424] rounded-md' key={profile.title}>
                                <img src={profile.img} className='h-[80px] w-[80px] rounded-md p-1'/>
                                <div className='text-white'>
                                    <h4 className='text-xl'>{profile.title}</h4>
                                    <a href={profile.url}><BsBoxArrowUpRight /></a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}
