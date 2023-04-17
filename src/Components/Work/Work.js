import React from 'react';
import WorkFilter from './WorkFilter';
import './Work.css'

const Work = () => {
    return (
        <section className='work__section pb-[100px] bg-[#101B32]'>
            <div className="container">
                <div className="work__inner">
                    <div className='section__title relative overflow-hidden pb-14 text-center'>
                        <h3 className='relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold'>MY WORKS</h3>
                        <span className='relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20'>
                            <span className='absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]'></span>
                        </span>
                        <span className='pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5'>WORKS</span>
                    </div>
                    <WorkFilter></WorkFilter>
                </div>
            </div>
        </section>
    );
};

export default Work;