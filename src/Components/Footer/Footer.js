import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const socials = [
    {
        id : 1,
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/AbirIslamAnupom/',
    },
    {
        id : 2,
        icon: <FaGithub />,
        link: 'https://github.com/jahanabir8',
    },
    {
        id : 3,
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/in/abir-islam-01041b23a/',
    },
    {
        id : 4,
        icon: <FaTwitter />,
        link: 'https://twitter.com/AbirAnupom',
    },
    {
        id : 5,
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/',
    },
]

const Footer = () => {
    return (
        <div className='footer__section py-[20px] border-t-[1px] border-[#4c4a4a]'>
            <div className="container">
                <div className="footer__inner flex flex-col sm:flex-row sm:justify-between items-center">
                    <ul className='flex w-[250px] justify-between mb-[10px] sm:mb-[0]'>
                        {
                            socials.map(social => (
                                        <li><a className='h-[35px] w-[35px] flex justify-center items-center inline-block text-[20px] text-[#BCBBC8] border-[1px] border-[#bcbbc854] rounded-[5px] hover:bg-[#72E2AE] hover:text-[#101B32]' target='_blank' href={social.link}>{social.icon}</a></li>
                            ))
                        }
                    </ul>
                    <p className='text-[#BCBBC8] text-[17px]'>© 2023, All right <span className='text-[#fff] font-[500] hover:text-[#72E2AE] cursor-pointer'>ABIR DEVELOPER</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;