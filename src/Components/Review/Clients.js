import React from 'react';

import { GrStar } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import './Review.css'

import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const reviews = [
    {
        id: 1,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'John Doe',
        desc: 'Client-envato.com',
        com : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque iste omnis quidem voluptatibus et reprehenderit numquam hic eos tempore dolore, libero ipsum consectetur nobis repellendus, provident facere quas voluptatum.'
    },
    {
        id: 2,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'John Doe',
        desc: 'Client-envato.com',
        com : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque iste omnis quidem voluptatibus et reprehenderit numquam hic eos tempore dolore, libero ipsum consectetur nobis repellendus, provident facere quas voluptatum.'
    },
    {
        id: 3,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'John Doe',
        desc: 'Client-envato.com',
        com : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque iste omnis quidem voluptatibus et reprehenderit numquam hic eos tempore dolore, libero ipsum consectetur nobis repellendus, provident facere quas voluptatum.'
    },
    {
        id: 4,
        img: 'https://tf-react-bieber.vercel.app/images/user-avatar-3.png',
        name: 'John Doe',
        desc: 'Client-envato.com',
        com : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque iste omnis quidem voluptatibus et reprehenderit numquam hic eos tempore dolore, libero ipsum consectetur nobis repellendus, provident facere quas voluptatum.'
    }

];

const Clients = () => {
    return (
        <div className='text-[#FFF]'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        loop = {true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="clientSwiper"
      >

        <div>
            {
                reviews.map((review)=>{
                    // const [id, img, name, desc, com] = review
                    return(
                        <div>
                            <SwiperSlide>
                                <div className='pt-[70px] p-[20px] border-[1px] border-[#4c4a4a] rounded-[10px]'>
                                    <img className='absolute h-[80px] w-[80px] border-[4px] border-[#72E2AE] rounded-[50%] absolute' src={review.img} alt="img" style={{top:"-40px"}}/>
                                    <h4 className='text-[20px] font-[600]'>{review.name}</h4>
                                    <p className='text-[#B3B3C0] mt-[3px] mb-[15px]'>{review.desc}</p>
                                    <p className='w-[120px] text-[#FFD233] text-[20px] flex justify-between mb-[15px]'><GrStar/><GrStar/><GrStar/><GrStar/><GrStar/></p>
                                    <p className='text-[17px] text-[#B3B3C0]'>{review.com}</p>
                                </div>
                            </SwiperSlide>
                        </div>
                    )
                })
            }
        </div>


      </Swiper>
        </div>
    );
};

export default Clients;