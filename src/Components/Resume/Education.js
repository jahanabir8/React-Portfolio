import React from 'react';
import { MdOutlineSchool } from 'react-icons/md';
import './Resume.css'

const Education = () => {
    const details = [
        {
            id: 1,
            year: '2014-2016',
            deg: 'Secondary School Certificate',
            ins: 'Cumilla Modern High School',
            des: 'I completed my secondary school certificate from Cumilla Modern High School, where I gained a solid foundation in various subjects. This education has played a crucial role in shaping my skills and knowledge in both academic and personal aspects.'
        },
        {
            id: 2,
            year: '2016-2018',
            deg: 'Higher School Certificate',
            ins: 'Cantonment Board Collage, Cumilla',
            des: 'I completed my Higher Secondary Certificate (HSC) education from Cantonment Board Collage. During my time there, I gained a strong foundation in various subjects and developed important skills that have helped me in my personal and professional life.'
        },
        {
            id: 3,
            year: '2018-2022',
            deg: 'Bachelor of Science',
            ins: 'Guangxi Science & Tech Normal University, Guangxi-China',
            des: 'I am proud to have completed my BSc degree from GXSTNU, which has equipped me with a strong foundation in my field of study. Through my education, I have gained valuable knowledge and skills that I am eager to apply in my career.'
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

export default Education;