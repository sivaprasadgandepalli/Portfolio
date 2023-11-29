import React from 'react'
import cchef from '../images/profiles/cchef.jpg';
import gfg from '../images/profiles/gfg.png';
import github from '../images/profiles/github.jpg';
import linkedin from '../images/profiles/linkedin.jpg';
import hackerrank from '../images/profiles/hackerrank.png';
import { BsBoxArrowUpRight } from "react-icons/bs";
import leetcode from '../images/profiles/leetcode.png';
export default function Profiles() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={gfg} />
                        <h4>Geeks For Geeks</h4>
                        <a href='https://auth.geeksforgeeks.org/user/sivaprasadgandepalli'><BsBoxArrowUpRight /></a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={leetcode} />
                        <h4>Leet Code</h4>
                        <a href='https://leetcode.com/20MH1A0483/'><BsBoxArrowUpRight /></a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={hackerrank} />
                        <h4>Hackerrank</h4>
                        <a href='https://www.hackerrank.com/20MH1A0483'><BsBoxArrowUpRight /></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={cchef} />
                        <h4>Code Chef</h4>
                        <a href='https://www.codechef.com/users/siva_prasad29'><BsBoxArrowUpRight /></a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={github} />
                        <h4>GitHub</h4>
                        <a href='https://github.com/sivaprasadgandepalli
                                '><BsBoxArrowUpRight />
                        </a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='pcard'>
                        <img src={linkedin} />
                        <h4>Linkedin</h4>
                        <a href='https://www.linkedin.com/in/siva-prasad-gandepalli-830a28212/ '><BsBoxArrowUpRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
