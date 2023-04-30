import React from 'react';
import Typewriter from 'typewriter-effect';
import BannerBtn from './BannerBtn';

const Banner = () => {
    return (
        <section className='banner__section pt-[140px] lg:pt-[0] h-[100%] lg:h-[100vh] flex'>
            <div className='container'>
                <div className='banner__inner'>
                    <div className='flex-wrap lg:flex items-center'>
                        <div className='banner__left mb-[40px] lg:mb-[0] w-[100%] lg:w-[50%]'>
                            <h1 className='text-[28px] md:text-[38px] xl:text-[48px] text-center lg:text-start font-[700] text-[#fff]'>Hi There 
                                <div className='flex justify-center lg:justify-start'> I'm 
                                    <span className='ml-[10px] text-[#72E2AE]'><Typewriter
                                        options={{
                                            strings: [' Abir', ' A Creative WebDesigner', ' Front-End Developer', ' Wordpress Designer'],
                                            autoStart: true,
                                            loop: true,
                                            typeSpeed: 30,
                                            delay: 50,
                                            deleteSpeed: 30,
                                        }}
                                        />
                                    </span>
                                </div> 
                            </h1>
                            <p className='max-w-[100%] lg:max-w-[480px] text-center lg:text-start text-[18px] leading-[28px] text-[#fff] mt-[20px] mb-[25px]'>I am a frontend web developer. I can provide clean code and pixel perfect design. 
                            I also make website more & more interactive with web animations.</p>
                            
                            <BannerBtn></BannerBtn>
                        </div>
                        <div className='banner__right w-[100%] lg:w-[50%]'>
                            <img className='w-[100%] h-[100%' src="https://dora-react.vercel.app/images/hero-person-img.png" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        );
};

export default Banner;