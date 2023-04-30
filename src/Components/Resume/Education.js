import React from 'react';
import { MdOutlineSchool } from 'react-icons/md';
import './Resume.css'

const Education = () => {
    const details = [
        {
            id: 1,
            year: '2014-2016',
            deg: 'Secondary School Certificate',
            ins: 'Abc College.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
        },
        {
            id: 2,
            year: '2016-2018',
            deg: 'Higher School Certificate',
            ins: 'Abc College.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
        },
        {
            id: 3,
            year: '2018-2022',
            deg: 'Bachelor of Science',
            ins: 'Abc College.',
            des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
        },
    ]

    return (
        <div className="education">
                <div>
                    <div className="flex items-center text-[22px] text-[#72E2AE] mb-[20px]">
                        <span className='text-[30px]'><MdOutlineSchool/></span> 
                        <h4 className="ms-[8px] text-[#fff] font-[600]">Educational Qualification</h4> </div>
                </div>
                <div className="timelineHere pt-[50px]">
                    {
                        details.map(detail =>{
                            return(
                               <div className="timeline__box flex gap-[50px] mb-[30px]">
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

export default Education;