import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import './Resume.css'

const Experience = () => {
    const details = [
        {
            id: 1,
            year: '2021 to Present',
            deg: 'Front-End Web Developer',
            ins: 'Opedia Technologies',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
        },
        {
            id: 2,
            year: '2020 to Present',
            deg: 'Web Designer',
            ins: 'Fiverr',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
        },
    ]

    return (
        <div className="education">
                <div>
                    <div className="flex items-center text-[22px] text-[#72E2AE] mb-[20px]">
                        <span className='text-[30px]'><BiBriefcase/></span> 
                        <h4 className="ms-[8px] text-[#fff] font-[600]">Working Experience</h4> 
                    </div>
                </div>
                <div className="timelineHere pt-[50px]">
                    {
                        details.map(detail =>{
                            return(
                               <div key={detail.id} className="timeline__box flex gap-[50px] mb-[30px]">
                                    <div>
                                        <div className="timelineHead pe-[63px]">
                                            <p className="w-[115px] py-[2px] text-center text-[14px] font-[600] text-[#898F9C] bg-[#1D2D3B] rounded-[20px]">{detail.year}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-[18px] text-[#72E2AE]">{detail.deg}</h5>
                                        <p className="text-[17px] text-[#fff] mb-[4px]">{detail.ins}</p>
                                        <p className="text-[16px] font-[500] text-[#898F9C]">{detail.des}</p>
                                    </div>
                               </div> 
                            )
                        })
                    }
                </div>
            </div>
    );
};

export default Experience;