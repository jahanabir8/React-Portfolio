import React from 'react';

import { GrMailOption } from 'react-icons/gr';
import { MdCall, MdMailOutline } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
import From from './From';


const cInfos = [
    {
        id: 1,
        icon: <MdCall />,
        title: 'Contact on phone',
        num1: '01318821272',
        num2: '01318821272'
    },

    {
        id: 2,
        icon: <MdMailOutline />,
        title: 'Contact on mail',
        num1: 'jahanabir886@gmail.com',
        num2: 'jahanabir886@gmail.com'
    },

    {
        id: 3,
        icon: <TiLocationOutline />,
        title: 'Contact address',
        num1: 'Prabal Housing, Adabor, Mohammadpur, Dhaka'
    },
]

const ContactInfo = () => {
    return (
        <div className='grid md:grid-cols-2 gap-[30px]'>
            <div className='contact__info text-[#fff]'>
                <div>
                    <h3 className='text-[24px] text-[#fff] font-[600] mb-[15px]'>Contact Information</h3>
                    <p className='text-[#BCBBC8] max-w-[520px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.</p>
                    <p className='h-[4px] w-[100px] bg-[#254047] rounded-[25px] mb-[30px] mt-[20px]'></p>
                </div>
                <div>
                    {
                        cInfos.map(cInfo => (
                            <div className='flex items-start mb-[20px] p-[20px] bg-[#1B2336] border-[1px] border-[#4c4a4a] rounded-[10px]'>
                                <span className='h-[70px] w-[70px] flex justify-center items-center text-[#5FB892] text-[30px] bg-[#253742] rounded-[50%] me-[20px]'>{cInfo.icon}</span>
                                <div>
                                    <h4 className='text-[23px] font-[600] mb-[10px]'>{cInfo.title}</h4>
                                    <p className='text-[#BCBBC8] mb-[7px]'>{cInfo.num1}</p>
                                    <p className='text-[#BCBBC8]'>{cInfo.num2}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <From></From>
            </div>
        </div>
    );
};

export default ContactInfo;