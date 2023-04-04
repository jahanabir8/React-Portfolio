import React from 'react';
import BannerBtn from '../Banner/BannerBtn';
import './About.css'

const About = () => {

    const details = [
        {
            id: 1,
            span1: 'Fist Name',
            span2: 'Abir',
        },
        {
            id: 2,
            span1: 'Last Name',
            span2: 'Islam',
        },
        {
            id: 3,
            span1: 'Age',
            span2: '23 Years',
        },
        {
            id: 4,
            span1: 'Nationality',
            span2: 'Bangladeshi',
        },
        {
            id: 5,
            span1: 'Languages',
            span2: 'Bangali, English, Urdu, Chinese',
        },
        {
            id: 6,
            span1: 'Address',
            span2: 'Adabor, MohammadPur, Dhaka',
        },
        {
            id: 7,
            span1: 'Freelance',
            span2: 'Full Time Available',
        }
    ]

    return (
        <section className='about__section py-[100px] bg-[#101B32]'>
            <div className='container'>
                <div className='about__inner'>
                    <div className='section__title relative overflow-hidden pb-14 text-center'>
                        <h3 className='relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold'>ABOUT ME</h3>
                        <span className='relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20'>
                            <span className='absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]'></span>
                        </span>
                        <span className='pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5'>ABOUT</span>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <div className='about__left w-[100%] lg:w-[50%] mb-[40px] lg-[mb-0px] pe-[0px] lg:pe-[15px]'>
                            <div className='about__img'>
                                <img className='border-[10px] rounded-[12px] border-[#72E2AE] border-opacity-20' src='https://tf-react-bieber.vercel.app/images/about-image.jpg' alt='img'/>
                            </div>
                        </div>
                        <div className='about__right w-[100%] lg:w-[50%] ps-[0] lg:ps-[15px]'>
                            <h4 className='text-[28px] text-[#fff] font-bold mb-[20px]'>Hi, I am <span className='text-[#72E2AE]'>Abir Islam</span></h4>

                            <ul className='text-[#BFBECB] text-[17px] font-[600] mb-[20px]'>
                                {
                                    details.map(detail => <li className='flex mb-[8px]'><span className='w-[120px]'>{detail.span1}</span> <span>: {detail.span2}</span></li>)
                                }
                            </ul>
                            <BannerBtn></BannerBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;