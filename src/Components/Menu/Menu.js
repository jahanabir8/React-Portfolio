import React from 'react';

const Menu = () => {
    return (
        <div className='nav__bar absolute top-[20px] w-[100%] text-[#fff]'>
            <div className='container'>
                <div className='navBar__inner flex justify-between items-center'>
                    <div className='logo'>
                        {/* <a href='#!'><img src='https://dora-react.vercel.app/images/logo.png' alt='img'/></a> */}
                        <a className='text-[40px] font-bold' href='#!'>DEV</a>
                    </div>
                    <div className='menu'>
                        <ul className='flex justify-between '>
                            <li className='text-[17px] font-[600] pr-[20px]'><a href='#!'>Home</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#!'>About</a></li>
                            <li className='text-[17px] font-[600] px-[20px]'><a href='#!'>Works</a></li>
                            <li className='text-[17px] font-[600] pl-[20px]'><a href='#!'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;