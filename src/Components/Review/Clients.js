import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        className="mySwiper"
      >

        <div>
            {
                reviews.map((review)=>{
                    // const [id, img, name, desc, com] = review
                    return(
                        <div>
                            <SwiperSlide>
                                <img src={review.img} alt="img" />
                                <p>{review.name}</p>
                                <p>{review.desc}</p>
                                <p>{review.com}</p>
                            </SwiperSlide>
                        </div>
                    )
                })
            }
        </div>

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
    );
};

export default Clients;