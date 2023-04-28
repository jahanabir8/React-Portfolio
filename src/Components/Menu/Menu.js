import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className='nav__bar py-[10px] text-[#fff] fixed w-[100%] left-0 top-0 bg-[#0E1C2F] z-[999]'>
            <div className='container'>
                <div className='navBar__inner flex justify-between items-center'>
                    <div className='logo'>
                        {/* <a href='#!'><img src='https://dora-react.vercel.app/images/logo.png' alt='img'/></a> */}
                        <a className='text-[40px] text-[#72E2AE] font-bold' href='#!'>MEDEV</a>
                    </div>
                    <div className='menu'>
                        <ul className='flex justify-between '>
                            <li className='text-[17px] font-[600] pr-[20px]'><a href='#!'>Home</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#about'>About</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#work'>Works</a></li>
                            <li className='text-[17px] font-[600] pl-[20px]'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;